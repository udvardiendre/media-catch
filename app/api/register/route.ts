import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import profilePicture from "@/public/assets/images/profile.png"


export const POST = async (req: any) => {
    
    try {
        const {email, password, subscribe, termsAndConditions} = await req.json()
        console.log(email, password, subscribe, termsAndConditions)
        const hashedPassword = await bcrypt.hash(password, 10)
        const username = email.split("@")[0]
        await connectToDB()
        User.create({email, username, password: hashedPassword, subscribe, termsAndConditions, image: profilePicture.src })



        return new Response("Success", {status: 201})
    } catch (error) {
        return new Response("Failed to create a new user", {status: 500})
    }

}