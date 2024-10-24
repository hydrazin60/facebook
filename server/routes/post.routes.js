import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  createPost,
  getAllPosts,
  getUserPosts,
  LikePostAndUnlike,
} from "../controllers/Post.controllers.js";
import upload from "../middlewares/multer.js";
const PostRouter = express.Router();

PostRouter.post(
  "/create-post",
  isAuthenticated,
  upload.array("images", 5),
  createPost
);
PostRouter.get("/show-all-post", isAuthenticated, getAllPosts);
PostRouter.get("/auther-posts", isAuthenticated, getUserPosts);
PostRouter.get("/liked-post/:id", isAuthenticated, LikePostAndUnlike);
export default PostRouter;
