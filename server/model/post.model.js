import mongoose from "mongoose";
const postSchema = mongoose.Schema(
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

const Post = mongoose.model("Post", postSchema);
export default Post;
