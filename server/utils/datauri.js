import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (file) => {
  try {
    if (!file || !file.originalname || !file.buffer) {
      throw new Error("File not found");
    }
    const ext = path.extname(file.originalname).toString(); // Use 'ext' here
    return parser.format(ext, file.buffer).content; // Pass 'ext' instead of 'extname'
  } catch (err) {
    console.log(`Data Uri error: ${err.message}`);
    throw err;
  }
};
export default getDataUri;
