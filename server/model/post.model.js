import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      minlength: 1,
      maxlength: 280,
    },
    image: {
      type: String,
      default: " ",
      // match: /^(https?:\/\/[^\s]+)$/,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
    postShares: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
  },
  { timestamps: true }
);
postSchema.index({ author: 1 });
postSchema.index({ postShares: 1 }); // Index to optimize queries involving postShares

export const Post = mongoose.model("Post", postSchema);
