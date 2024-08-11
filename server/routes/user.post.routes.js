import express from "express";
import { isAuthenticated } from "../middlewares/IsAuthenticated.js";
import { CreatePost } from "../controllers/post.controllers.js";
import upload from "../middlewares/multer.js";

const postrouter = express.Router();

postrouter.post(
  "/create-post",
  isAuthenticated,
  upload.single("image"),
  CreatePost
);

export default postrouter;
