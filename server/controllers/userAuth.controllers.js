import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { profilePic, coverPic } = req.files || {};

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists!! Please login instead",
        error: true,
        success: false,
      });
    }

    let profilePicUrl = "";
    let coverPicUrl = "";

    if (profilePic) {
      const profilePicURI = getDataUri(profilePic[0]);
      const cloudResponse = await cloudinary.uploader.upload(profilePicURI);
      profilePicUrl = cloudResponse.secure_url;
    }

    if (coverPic) {
      const coverPicURI = getDataUri(coverPic[0]);
      const cloudResponse = await cloudinary.uploader.upload(coverPicURI);
      coverPicUrl = cloudResponse.secure_url;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profilePic: profilePicUrl,
      coverPic: coverPicUrl,
    });
    await newUser.save();
    res.status(201).json({
      message: `Welcome ${newUser.firstName} to our platform`,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal server error",
      error: true,
      success: false,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User doesn't exist! Please register frst",
        error: true,
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password!! Please try again",
        error: true,
        success: false,
      });
    }
    const userData = {
      _id: existingUser._id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
      profilePic: existingUser.profilePic,
      coverPic: existingUser.coverPic,
      about: existingUser.about,
      gender: existingUser.gender,
      relationship: existingUser.relationship,
      livesIn: existingUser.livesIn,
      worksAt: existingUser.worksAt,
      highSchool: existingUser.highSchool,
      college: existingUser.college,
      followers: existingUser.followers,
      following: existingUser.following,
      posts: existingUser.posts,
      savePost: existingUser.savePost,
      relationship: existingUser.relationship,
      createdAt: existingUser.createdAt,
      updatedAt: existingUser.updatedAt,
    };

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRETKEY,
      {
        expiresIn: "7d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: `Welcome ${existingUser.firstName}`,
      error: false,
      success: true,
      userData,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `Register error ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });
    res.status(200).json({
      message: "You are logged out successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `Logout error ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }
    return res.status(200).json({
      message: "User found successfully",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `Get profile error ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const getOwnProfile = async (req, res) => {
  try {
    const userId = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }
    return res.status(200).json({
      message: "User found successfully",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    console.log("getOwnProfile error: ", error.message);
    return res.status(500).json({
      message: `getOwnProfile error ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user;
    const {
      firstName,
      lastName,
      about,
      livesIn,
      worksAt,
      highSchool,
      college,
      relationship,
      type,
      gender,
    } = req.body;
    const { profilePic, coverPic } = req.files || {};

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    if (profilePic) {
      const profilePicURI = getDataUri(profilePic[0]);
      const cloudResponse = await cloudinary.uploader.upload(profilePicURI);
      user.profilePic = cloudResponse.secure_url;
    }
    if (coverPic) {
      const coverPicURI = getDataUri(coverPic[0]);
      const cloudResponse = await cloudinary.uploader.upload(coverPicURI);
      user.coverPic = cloudResponse.secure_url;
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (about) user.about = about;
    if (livesIn) user.livesIn = livesIn;
    if (worksAt) user.worksAt = worksAt;
    if (highSchool) user.highSchool = highSchool;
    if (college) user.college = college;
    if (relationship) user.relationship = relationship;
    if (type) user.type = type;
    if (gender) user.gender = gender;
    await user.save();
    return res.status(200).json({
      message: "Profile updated successfully",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    console.log("updateProfile error: ", error.message);
    return res.status(500).json({
      message: `updateProfile error ${error.message}`,
      error: true,
      success: false,
    });
  }
};
