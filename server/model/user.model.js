import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      default: "male",
    },
    bio: {
      type: String,
      default: "",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
