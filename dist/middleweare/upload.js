"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dwu92ycra" || process.env.CLOUD_NAME,
    api_key: "966841335387149" || process.env.API_KEY,
    api_secret: "U6SxatcQP5_U_K_46mbQeb9LyKM" || process.env.API_SECRET,
    resource_type: 'auto'
});
const storageOptions = {
    cloudinary: cloudinary_1.v2,
    params: {
        folder: 'learn_nodejs_sequelize',
        resource_type: 'auto',
        allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'jfif', 'webp'],
    }
};
const storage = new multer_storage_cloudinary_1.CloudinaryStorage(storageOptions);
const upload = (0, multer_1.default)({ storage: storage });
module.exports = upload;
