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


// export const getAllPosts = async (req, res) => {
//   try {
//     const post = await Post.find()
//       .sort({ createdAt: -1 })
//       .populate({
//         path: "authorId",
//         select: " firstName  lastName  profilePic ",
//       })
//       .populate({
//         path: "comments",
//         sort: { createdAt: -1 },
//         populate: {
//           path: "autherId",
//           select: "firstName lastName profilePic",
//         },
//       });

//     return res.status(200).json({
//       message: "All posts fetched successfully",
//       data: post,
//       error: false,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({
//       message: `getAllPosts error: ${error.message}`,
//       error: true,
//       success: false,
//     });
//   }
// };


export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "authorId",
        select: "firstName lastName profilePic gender",
      })
      .populate({
        path: "comments",
        populate: {
          path: "authorId",
          select: "firstName lastName profilePic ",
        },
      });

    return res.status(200).json({
      message: "All posts fetched successfully ",
      data: posts,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(`getAllPosts error: ${error.message}`);
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

export const LikePostAndUnlike = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        error: true,
        success: false,
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    if (postId === userId) {
      return res.status(400).json({
        message: "Invalid credentials",
        error: true,
        success: false,
      });
    }

    const isPostLiked = post.likes.includes(userId);
    if (isPostLiked) {
      await Promise.all([
        Post.findByIdAndUpdate(postId, {
          $pull: { likes: userId },
        }),
        User.findByIdAndUpdate(userId, {
          $pull: { likes: postId },
        }),
      ]);

      return res.status(200).json({
        message: "Post unliked successfully",
        error: false,
        success: true,
      });
    }

    if (!isPostLiked) {
      await Promise.all([
        Post.findByIdAndUpdate(postId, {
          $push: { likes: userId },
        }),
        User.findByIdAndUpdate(userId, {
          $push: { likes: postId },
        }),
      ]);
      return res.status(200).json({
        message: "Post liked successfully",
        error: false,
        success: true,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: `LikePostAndUnlike error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const WriteComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user;
    const { text } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        error: true,
        success: false,
      });
    }
    if (!text || text.trim().length === 0) {
      return res.status(400).json({
        message: "Text is required",
        error: true,
        success: false,
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    const newComment = await Comment.create({
      text,
      authorId: userId,
      postId: postId,
    });

    const comment = await Comment.findById(newComment._id).populate({
      path: "authorId",
      select: "firstName lastName profilePic",
    });

    post.comments.push(comment._id);
    await post.save();

    return res.status(200).json({
      message: "Comment created successfully",
      comment,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(`WriteComment error: ${error.message}`);
    return res.status(500).json({
      message: `WriteComment error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const editComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const autherId = req.user;
    const { text } = req.body;
    if (commentId.length !== 24) {
      return res.status(404).json({
        message: "invalid comment id",
        error: true,
        success: false,
      });
    }
    if (!text || text.trim().length === 0) {
      return res.status(400).json({
        message: "Text is required",
        error: true,
        success: false,
      });
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
        error: true,
        success: false,
      });
    }
    const user = await User.findById(autherId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }
    if (autherId !== comment.authorId.toString()) {
      return res.status(400).json({
        message: "Invalid credentials You can't edit this comment",
        error: true,
        success: false,
      });
    }
    comment.text = text;

    const commentData = await Comment.findById(commentId).populate({
      path: "authorId",
      select: "firstName lastName profilePic",
    });
    await comment.save();
    return res.status(200).json({
      message: "Comment edited successfully",
      comment: commentData,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(`editComment error: ${error.message}`);
    return res.status(500).json({
      message: `editComment error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const DeleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const autherId = req.user;

    if (commentId.length !== 24) {
      return res.status(404).json({
        message: "invalid comment id",
        error: true,
        success: false,
      });
    }
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
        error: true,
        success: false,
      });
    }

    // Find the user
    const user = await User.findById(autherId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // Check if the user is the author of the comment or the post
    const post = await Post.findById(comment.postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found for the comment",
        error: true,
        success: false,
      });
    }

    if (
      autherId.toString() !== comment.authorId.toString() &&
      autherId.toString() !== post.authorId.toString()
    ) {
      return res.status(403).json({
        message: "You can't delete this comment",
        error: true,
        success: false,
      });
    }

    // Delete the comment
    await Comment.findByIdAndDelete(commentId);
    return res.status(200).json({
      message: "Comment deleted successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(`DeleteComment error: ${error.message}`);
    return res.status(500).json({
      message: `DeleteComment error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};

export const DeletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const autherId = req.user;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }
    const user = await User.findById(autherId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (post.authorId.toString() !== autherId) {
      return res.status(400).json({
        message: "Invalid credentials You can't delete this post",
        success: false,
      });
    }
    await Post.findByIdAndDelete(postId);
    user.posts = user.posts.filter((post) => post.toString() !== postId);

    await user.save();
    await Comment.deleteMany({ postId: postId });
    return res.status(200).json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(`DeletePost error: ${error.message}`);
    return res.status(500).json({
      message: `DeletePost error: ${error.message}`,
      error: true,
      success: false,
    });
  }
};
