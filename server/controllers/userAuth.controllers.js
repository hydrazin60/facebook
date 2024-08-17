// import User from "../models/user.models.js";
// import bcrypt from "bcrypt";
// import getDataUri from "../utils/datauri.js";
// import cloudinary from "../utils/cloudinary.js";

// export const Register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const { profilePic, coverPic } = req.files || {};

//     console.log(firstName, lastName, email, password, profilePic, coverPic);

//     if (!firstName || !lastName || !email || !password) {
//       return res.status(400).json({
//         message: "All fields are required",
//         error: true,
//         success: false,
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         message: "User already exists!! Please login instead",
//         error: true,
//         success: false,
//       });
//     }

//     let profilePicUrl = "";
//     let coverPicUrl = "";

//     if (profilePic) {
//       const profilePicURI = getDataUri(profilePic[0]);
//       const cloudResponse = await cloudinary.uploader.upload(
//         profilePicURI.content
//       );
//       profilePicUrl = cloudResponse.secure_url;
//     }

//     if (coverPic) {
//       const coverPicURI = getDataUri(coverPic[0]);
//       const cloudResponse = await cloudinary.uploader.upload(
//         coverPicURI.content
//       );
//       coverPicUrl = cloudResponse.secure_url;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       profilePic: profilePicUrl,
//       coverPic: coverPicUrl,
//     });

//     await newUser.save();

//     res.status(201).json({
//       message: `Welcome ${newUser.firstName} to our platform`,
//       error: false,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({
//       message: "Internal server error",
//       error: true,
//       success: false,
//     });
//   }
// };

import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

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
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `Register error ${error.message}`,
      error: true,
      success: false,
    });
  }
};
