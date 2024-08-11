import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (file) => {
  try {
    // Ensure that file is an object and has necessary properties
    if (!file || !file[0] || !file[0].originalname || !file[0].buffer) {
      throw new Error("Invalid file");
    }
    const extName = path.extname(file[0].originalname).toString();
    return parser.format(extName, file[0].buffer).content;
  } catch (error) {
    console.error("Error generating Data URI:", error);
    throw error;
  }
};

export default getDataUri;

// const uploadImage = `https://api.cloudinary.com/v1_1/:dtiaar0gn/:image`;

// // import datauri from "datauri/parser.js";
// // import path from "path";
// // const parser = new datauri();

// const getDataUri = async (image) => {
//   const formData = new FormData();
//   formData.append("file", image);
//   formData.append("upload_preset", "facebook_clone");
//   const dataResponse = await fetch(url, {
//     method: "POST",
//     body:  formData,
//   });
//   return dataResponse.json();
// };

// export default getDataUri;
