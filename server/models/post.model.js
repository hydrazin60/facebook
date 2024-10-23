// import mongoose from "mongoose";
// const postSchema = new mongoose.Schema(
//   {
//     caption: {
//       type: String,
//       default: function () {
//         return `Posted on ${new Date().toLocaleDateString()}`;
//       },
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     authorId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     likes: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         default: [],
//       },
//     ],
//     comments: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment",
//         default: [],
//       },
//     ],
//   },
//   { timestamps: true }
// );
// const Post = mongoose.model("Post", postSchema);
// export default Post;

import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      default: function () {
        return `Posted on ${new Date().toLocaleDateString()}`;
      },
    },
    image: {
      type: [String],
      required: true,
    },
    authorId: {
      // Consistent naming
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
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
