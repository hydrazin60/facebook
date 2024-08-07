import express from "express";
import {
  Login,
  LogOut,
  Register,
} from "../controllers/userAuth.controllers.js";

const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(LogOut);

export default router;
