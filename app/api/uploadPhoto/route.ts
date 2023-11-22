import path from "path";
import { v4 as uuidv4 } from 'uuid';
import os from 'os'
import fs from "fs/promises"
import { uploadPhotosToCloudinary } from "@/utils/cloudinary";



export const POST = async (req: any) => {
    
    try {
        
        const formData = await req.formData()
        const savePhotosToLocal = async (formData: any) => {
            const files = formData.getAll('files')

            const multipleBufferPromise = files.map((file: any) =>(
                file.arrayBuffer()
                    .then((data: any) => {
                        const buffer = Buffer.from(data)
                        const name = uuidv4()
                        const ext = file.type.split("/")[1]

                        const tempdir = os.tmpdir()
                        const uploadDir = path.join(tempdir, `/${name}.${ext}`)

                        fs.writeFile(uploadDir, buffer)


                        return {filepath: uploadDir, filename: file.name}
                    })
            ))

            return await Promise.all(multipleBufferPromise)

        }

        const uploadPhoto = async (formData: any) => {
            try {
                const newFiles = await savePhotosToLocal(formData)

                const photos = await uploadPhotosToCloudinary(newFiles)
                console.log(photos)

                newFiles.map(file => fs.unlink(file.filepath))
                return photos
            } catch (error) {
                return error 
            }
        }
        
        const result = await uploadPhoto(formData)
       
          
        return new Response(JSON.stringify({ success: true, photos: result }), {status: 201, headers: { 'Content-Type': 'application/json' }})
    } catch (error) {
        return new Response("Failed to create a new user", {status: 500})
    }

}