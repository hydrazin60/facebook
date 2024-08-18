import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserAuthRouter from "./routes/userAuth.routes.js";
import cookieParser


from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/facebook";
app.use(express.json());
app.use(cookieParser());

app.use("/facebook/api/v1/user", UserAuthRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
