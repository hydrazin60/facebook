import express from "express";
import { Login, Register } from "../controllers/userAuth.controllers.js";
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
export default UserAuthRouter;
