import express from "express";
import {
    EditProfile,
  getProfile,
  Login,
  LogOut,
  Register,
} from "../controllers/userAuth.controllers.js";
import { isAuthenticated } from "../middlewares/IsAuthenticated.js";

const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(LogOut);
router.route("/get-profile/:id").get(getProfile);
router.route("/edit-profile").post( isAuthenticated , EditProfile)
export default router;
