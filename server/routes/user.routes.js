import express from "express";
import { Register } from "../controllers/userAuth.controllers.js";


const router = express.Router();
router.route("/register").post(Register);


export default router;
