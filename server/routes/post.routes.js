import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  createPost,
  getAllPosts,
  getUserPosts,
} from "../controllers/Post.controllers.js";
import upload from "../middlewares/multer.js";
const PostRouter = express.Router();

PostRouter.post(
  "/create-post",
  isAuthenticated,
  upload.single("image"),
  createPost
);
PostRouter.get("/show-all-post", isAuthenticated, getAllPosts);
PostRouter.get("/auther-posts", isAuthenticated, getUserPosts);

export default PostRouter;
