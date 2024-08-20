import sharp from "sharp";
import Post from "../models/post.model.js";
import cloudinary from "../utils/cloudinary.js";
import User from "../models/user.models.js";
import Comment from "../models/comment.model.js";
export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const image = req.file;
    const authorId = req.user;
    const authorUser = await User.findById(authorId);
    if (!authorUser) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }
    if (!image) {
      return res.status(400).json({
        message: "Image is required",
        error: true,
      });
    }
    const optimizedImageBuffer = await sharp(image.buffer)
      .resize({ width: 800, height: 800, fit: "inside" })
      .toFormat("jpeg", { quality: 90 })
      .toBuffer();

    const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString(
      "base64"
    )}`;
    const cloudResponse = await cloudinary.uploader.upload(fileUri);
    const post = await Post.create({
      caption,
      image: cloudResponse.secure_url,
      authorId,
    });
    await User.findByIdAndUpdate(authorId, {
      $push: { posts: post._id },
    });

    return res.status(201).json({
      message: "Post created successfully",
      data: post,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `createPost error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "authorId",
        select: " firstName  lastName  profilePic ",
      })
      .populate({
        path: "comments",
        sort: { createdAt: -1 },
        populate: {
          path: "autherId",
          select: "firstName lastName profilePic",
        },
      });

    return res.status(200).json({
      message: "All posts fetched successfully",
      data: post,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `getAllPosts error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const authorId = req.user;
    const user = await User.findById(authorId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }
    const posts = await Post.find({ authorId })
      .sort({ createdAt: -1 })
      .populate({
        path: "authorId",
        select: "firstName lastName profilePic",
      })
      .populate({
        path: "comments",
        sort: { createdAt: -1 },
        populate: {
          path: "autherId",
          select: "firstName lastName profilePic",
        },
      });
    return res.status(200).json({
      message: "User posts fetched successfully",
      data: posts,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `getUserPosts error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};
