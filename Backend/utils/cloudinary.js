const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");
const dotenv= require('dotenv')
dotenv.config();

console.log(process.env.api_key)
cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret
});


const uploadOnCloudinary = async (fileBuffer, fileName) => {
    if (!fileBuffer || !fileName) {
        throw new Error("No file buffer or file name provided");
    }

    // Save the buffer to a temporary file
    const tempFilePath = path.join(__dirname, "temp", fileName);
    console.log(tempFilePath)
    fs.writeFileSync(tempFilePath, fileBuffer);

    try {
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(tempFilePath, {
            resource_type: "auto"
        });
        console.log("File has been uploaded on Cloudinary:", response.url);
        return response;
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        throw error;
    } finally {
        // Delete the temporary file
        fs.unlinkSync(tempFilePath);
    }
};

module.exports = { uploadOnCloudinary };
