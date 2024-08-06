import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`database connected on  ${process.env.MONGODB_URI}`);
  })
  .catch((error) => {
    console.log(error);
  });
