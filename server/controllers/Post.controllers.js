import sharp from "sharp";
import Post from "../models/post.model.js";
import cloudinary from "../utils/cloudinary.js";
import User from "../models/user.models.js";

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