import { v2 as cloudinary } from 'cloudinary'
export const handleFileUpdate = (fileName: string, type: string) => {
    cloudinary.uploader.destroy(fileName, { resource_type: type })
}