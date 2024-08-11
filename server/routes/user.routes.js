import express from "express";
import {
  EditProfile,
  FollowUnFollow,
  getProfile,
  GetSuggestedUsers,
  Login,
  LogOut,
  Register,
} from "../controllers/userAuth.controllers.js";
import { isAuthenticated } from "../middlewares/IsAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(LogOut);
router.route("/get-profile/:id").get(getProfile);
router.route("/edit-profile").post(
  isAuthenticated,
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "coverPicture", maxCount: 1 },
  ]),
  EditProfile
);
router.route("/SuggestedUsers").get(isAuthenticated, GetSuggestedUsers);
router.route("/follow-unfollowUser/:id").post(isAuthenticated, FollowUnFollow);

export default router;
