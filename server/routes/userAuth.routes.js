import express from "express";
import {
  Login,
  Logout,
  Register,
} from "../controllers/userAuth.controllers.js";
import upload from "../middlewares/multer.js";

const UserAuthRouter = express.Router();
UserAuthRouter.post(
  "/register",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "coverPic", maxCount: 1 },
  ]),
  Register
);
UserAuthRouter.post("/login", Login);
UserAuthRouter.get("/logout", Logout);
export default UserAuthRouter;
