import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: [20, "Name can not be more than 20 characters"],
    },
    lastName: {
      type: String,
      required: true,
      maxlength: [20, "Name can not be more than 20 characters"],
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
      minlength: [8, "Password must be at least 8 characters"],
    },
    profilePic: {
      type: String,
      default: null,
    },
    coverPic: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
    birthDay: {
      type: Number,
      default: "",
    },
    birthMonth: {
      type: String,
      default: "",
    },
    birthYear: {
      type: Number,
      default: "",
    },
    livesIn: {
      type: String,
      default: "",
    },
    worksAt: {
      type: String,
      default: "",
    },
    highSchool: {
      type: String,
      default: "",
    },
    college: {
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
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    savePost: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    relationship: {
      type: String,
      enum: ["single", "relationship", "married", "complicated", "divorced"],
      default: "single",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
