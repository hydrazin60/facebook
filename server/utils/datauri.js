const uploadImage = `https://api.cloudinary.com/v1_1/:dtiaar0gn/:image`;

// import datauri from "datauri/parser.js";
// import path from "path";
// const parser = new datauri();

const getDataUri = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "facebook_clone");
  const dataResponse = await fetch(url, {
    method: "POST",
    body:  formData,
  });
  return dataResponse.json();
};

export default getDataUri;
