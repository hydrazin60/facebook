import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
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
