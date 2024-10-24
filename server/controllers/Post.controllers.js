import sharp from "sharp";
import Post from "../models/post.model.js";
import cloudinary from "../utils/cloudinary.js";
import User from "../models/user.models.js";
import Comment from "../models/comment.model.js";
// export const createPost = async (req, res) => {
//   try {
//     const { caption } = req.body;
//     const images = req.files;
//     const authorId = req.user;
//     const authorUser = await User.findById(authorId);
//     if (!authorUser) {
//       return res.status(404).json({
//         message: "User not found",
//         error: true,
//         success: false,
//       });
//     }
//     console.log(images);

//     if (!images || images.length === 0) {
//       return res.status(400).json({
//         message: " At least one Image is required",
//         error: true,
//       });
//     }
//     const imageUrls = [];

//     for (let image of images) {
//       const optimizedImageBuffer = await sharp(image.buffer)
//         .resize({ width: 800, height: 800, fit: "inside" })
//         .toFormat("jpeg", { quality: 90 })
//         .toBuffer();

//       const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString(
//         "base64"
//       )}`;

//       const cloudResponse = await cloudinary.uploader.upload(fileUri);
//       imageUrls.push(cloudResponse.secure_url);
//     }

//     const post = await Post.create({
//       caption,
//       image: imageUrls,
//       authorId,
//     });
//     await User.findByIdAndUpdate(authorId, {
//       $push: { posts: post._id },
//     });

//     await post.populate({
//       path: "authorId",
//       select: "firstName  lastName  profilePic",
//     });

//     return res.status(201).json({
//       message: "Post created successfully",
//       data: post,
//       error: false,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({
//       message: `createPost error: ${error.message}`,
//       error: true,
//       success: false,
//     });
//   }
// };

// export const createPost = async (req, res) => {
//   try {
//     const { caption } = req.body;
//     const images = req.files; // Correctly get files from the request
//     const authorId = req.user; // Assuming req.user holds the author ID
//     const authorUser = await User.findById(authorId);

//     // Check if the user exists
//     if (!authorUser) {
//       return res.status(404).json({
//         message: "User not found",
//         error: true,
//         success: false,
//       });
//     }

//     console.log(images); // Check the uploaded images

//     // Ensure at least one image is uploaded
//     if (!images || images.length === 0) {
//       return res.status(400).json({
//         message: "At least one Image is required",
//         error: true,
//       });
//     }

//     const imageUrls = [];

//     // Loop through each image, optimize it, and upload it to Cloudinary
//     for (let image of images) {
//       const optimizedImageBuffer = await sharp(image.buffer)
//         .resize({ width: 800, height: 800, fit: "inside" })
//         .toFormat("jpeg", { quality: 90 })
//         .toBuffer();
//       console.log("optimizedImageBuffer", optimizedImageBuffer);

//       // Upload the optimized image buffer to Cloudinary
//       const cloudResponse = await cloudinary.uploader
//         .upload_stream({ resource_type: "image" }, (error, result) => {
//           if (error) {
//             console.error("Cloudinary upload error: ", error);
//             throw new Error("Image upload to Cloudinary failed");
//           }
//           imageUrls.push(result.secure_url);
//         })
//         .end(optimizedImageBuffer);
//     }
// console.log("imageUrls", imageUrls);

//     // Create a post with the image URLs
//     const post = await Post.create({
//       caption,
//       images: imageUrls, // Ensure the field matches your Post schema
//       authorId,
//     });

//     // Update the user with the new post
//     await User.findByIdAndUpdate(authorId, {
//       $push: { posts: post._id },
//     });

//     // Populate author info for the post response
//     await post.populate({
//       path: "authorId",
//       select: "firstName lastName profilePic",
//     });

//     return res.status(201).json({
//       message: "Post created successfully",
//       data: post,
//       error: false,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({
//       message: `createPost error: ${error.message}`,
//       error: true,
//       success: false,
//     });
//   }
// };

export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const images = req.files;
    const authorId = req.user;
    const authorUser = await User.findById(authorId);

    if (!authorUser) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    if (!images || images.length === 0) {
      return res.status(400).json({
        message: "At least one image is required",
        error: true,
      });
    }

    const imageUrls = [];
    for (let image of images) {
      const optimizedImageBuffer = await sharp(image.buffer)
        .resize({ width: 800, height: 800, fit: "inside" })
        .toFormat("jpeg", { quality: 90 })
        .toBuffer();

      console.log("optimizedImageBuffer", optimizedImageBuffer);

      const cloudResponse = await cloudinary.uploader.upload(
        `data:image/jpeg;base64,${optimizedImageBuffer.toString("base64")}`,
        {
          resource_type: "image",
        }
      );

      if (cloudResponse && cloudResponse.secure_url) {
        imageUrls.push(cloudResponse.secure_url);
      } else {
        console.error("Cloudinary upload failed for an image.");
      }
    }
    const post = await Post.create({
      caption,
      images: imageUrls,
      authorId,
    });
    await User.findByIdAndUpdate(authorId, {
      $push: { posts: post._id },
    });
    await post.populate({
      path: "authorId",
      select: "firstName lastName profilePic",
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
