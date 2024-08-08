import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
export const Register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      profilePicture,
      coverPicture,
      gender,
      bio,
    } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists! Try logging in instead",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobileNumber,
      profilePicture,
      coverPicture,
      gender,
      bio,
    });

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }

    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid Password",
        success: false,
        error: true,
      });
    }
    const existingUserData = {
      _id: existingUser._id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
      mobileNumber: existingUser.mobileNumber,
      profilePicture: existingUser.profilePicture,
      coverPicture: existingUser.coverPicture,
      gender: existingUser.gender,
      bio: existingUser.bio,
      followers: existingUser.followers,
      following: existingUser.following,
      friends: existingUser.friends,
      posts: existingUser.posts,
      createdAt: existingUser.createdAt,
      updatedAt: existingUser.updatedAt,
    };

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRETKEY,
      { expiresIn: "30d" }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      })
      .json({
        message: "User logged in successfully",
        success: true,
        data: existingUserData,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};

export const LogOut = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 0,
    });
    res.status(200).json({
      message: "User logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    let user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};

// export const EditProfile = async (req, res) => {
//   try {
//     const userId = req.id;
//     if (!userId) {
//       return res.status(404).json({
//         message: "User not found",
//         success: false,
//         error: true,
//       });
//     }

//     const { firstName, lastName, gender, bio } = req.body;
//     const profilePicture = req.files?.profilePicture;
//     const coverPicture = req.files?.coverPicture;

//     if (profilePicture) {
//       const fileUri = getDataUri(profilePicture);
//       const fileResponse = await cloudinary.uploader.upload(fileUri);
//       user.profilePicture = fileResponse?.url;
//     }

//     if (coverPicture) {
//       const fileUri = getDataUri(coverPicture);
//       const fileResponse = await cloudinary.uploader.upload(fileUri);
//       user.coverPicture = fileResponse?.url;
//     }

//     const user = await User.findById(userId);
//     if (bio) user.bio = bio;
//     if (firstName) user.firstName = firstName;
//     if (lastName) user.lastName = lastName;
//     if (gender) user.gender = gender;
//     await user.save();

//     return res.status(200).json({
//       message: "Profile updated successfully",
//       success: true,
//       data: user,
//     });
//   } catch (error) {
//     console.error("EditProfile error:", error);
//     res.status(500).json({
//       message: "Internal server error",
//       success: false,
//       error: true,
//     });
//   }
// };

export const EditProfile = async (req, res) => {
  try {
    console.log("Received files:", req.files); // Log the received files

    const userId = req.id;
    if (!userId) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }

    const { firstName, lastName, gender, bio } = req.body;
    const { profilePicture, coverPicture } = req.files || {};

    let cloudResponse;

    if (profilePicture) {
      const fileUri = getDataUri(profilePicture);
      const fileResponse = await cloudinary.uploader.upload(fileUri);
      cloudResponse = fileResponse;
    }

    if (coverPicture) {
      const fileUri = getDataUri(coverPicture);
      const fileResponse = await cloudinary.uploader.upload(fileUri);
      cloudResponse = fileResponse;
    }

    const user = await User.findById(userId);
    if (bio) user.bio = bio;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (gender) user.gender = gender.trim(); // Trim whitespace
    if (profilePicture) user.profilePicture = cloudResponse?.url;
    if (coverPicture) user.coverPicture = cloudResponse?.url;

    await user.save();
    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("EditProfile error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};
