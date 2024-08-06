import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Userrouter from "./routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());



app.use("/facebook/api/user/v1", Userrouter);




app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`database connected on  ${process.env.MONGODB_URI}`);
  })
  .catch((error) => {
    console.log(error);
  });
