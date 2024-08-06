import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    commentPhoto: {
      type: String,
      default: " ",
      // match: /^(https?:\/\/[^\s]+)$/,
    },
  },
  { timestamps: true }
);
commentSchema.index({ author: 1 });
commentSchema.index({ post: 1 });

export const Comment = mongoose.model("Comment", commentSchema);
