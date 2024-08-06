import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
