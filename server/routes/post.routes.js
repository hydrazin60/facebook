// import express from "express";
// import { isAuthenticated } from "../middlewares/isAuthenticated.js";
// import { createPost } from "../controllers/Post.controllers.js";
// const PostRouter = express.Router();

// PostRouter.post("/create-post",isAuthenticated, createPost )

// export default PostRouter

import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createPost } from "../controllers/Post.controllers.js";
import upload from "../middlewares/multer.js";
const PostRouter = express.Router();

PostRouter.post(
  "/create-post",
  isAuthenticated,
  upload.single("image"),
  createPost
);

export default PostRouter;
