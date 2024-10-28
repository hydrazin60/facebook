import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import {
  createPost,
  DeleteComment,
  DeletePost,
  getAllPosts,
  getUserPosts,
  LikePostAndUnlike,
  WriteComment,
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
PostRouter.post("/write-comment/:id", isAuthenticated, WriteComment);
PostRouter.delete("/delete-comment/:id", isAuthenticated, DeleteComment);
PostRouter.delete("/delete-post/:id", isAuthenticated, DeletePost);
export default PostRouter;
