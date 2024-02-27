import { v2 as cloudinary } from 'cloudinary'
export const handleDeleteFile = async (fileId: any, typeFile: string) => {
    try {
        console.log('name delete', fileId, 'type', typeFile)
        const check = await cloudinary.uploader.destroy(fileId, { resource_type: typeFile })
        if (check) {
            console.log('delete sucessfull')
        } else {
            console.log('false')
        }
    } catch (error) {
        return error
    }
}