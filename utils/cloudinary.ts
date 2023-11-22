import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})


export const uploadPhotosToCloudinary = async (newFiles: any) => {
    try {
        const multiplePhotosPromise = newFiles.map((file: any) => (
            cloudinary.v2.uploader.upload(file.filepath, {folder: 'products_images'})
        ))
    
        return await Promise.all(multiplePhotosPromise)
    } catch (error) {
        return console.log(error)
    }
    
}