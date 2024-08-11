import { User } from "../model/user.model.js";
import Post from "../model/post.model.js";
import sharp from "sharp";
import cloudinary from "../utils/cloudinary.js";

export const CreatePost = async (req, res) => {
  try {
    const { caption } = req.body;
    const image = req.file;
    const authorId = req.id;

    if (!caption || !image) {
      return res.status(400).json({
        message: "Caption and image are required",
        success: false,
        error: true,
      });
    }

    const user = await User.findById(authorId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }

    const optimizedImageBuffer = await sharp(image.buffer)
      .resize({ width: 500, height: 500 })
      .toFormat("jpeg", { quality: 100 })
      .toBuffer();

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: true,
          });
        }
        console.log(result);

        const post = await Post.create({
          caption,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          author: authorId,
        });

        return res.status(201).json({
          message: "Post created successfully",
          success: true,
          data: post,
        });
      }
    );

    uploadStream.end(optimizedImageBuffer);
  } catch (error) {
    console.error("Internal server error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: true,
    });
  }
};
