import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const POST = async (req: any) => {
    try {
        await connectToDB()
        const {email} = await req.json()
        const user = await User.findOne({email}).select("_id")
        console.log("User: ", user)
        return new Response(JSON.stringify(user), {status: 200})
    } catch (error) {
        return new Response("Something went wrong:" + error,{status: 500})
    }
}