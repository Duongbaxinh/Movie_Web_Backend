import multer from "multer";
import dotenv from 'dotenv'
dotenv.config()
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: "dwu92ycra" || process.env.CLOUD_NAME,
    api_key: "966841335387149" || process.env.API_KEY,
    api_secret: "U6SxatcQP5_U_K_46mbQeb9LyKM" || process.env.API_SECRET,
    resource_type: 'auto'
});

const storageOptions: any = {
    cloudinary: cloudinary,
    params: {
        folder: 'learn_nodejs_sequelize',
        resource_type: 'auto',
        allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'jfif', 'webp'],
    }
};
const storage = new CloudinaryStorage(storageOptions)
const upload = multer({ storage: storage })
export = upload;