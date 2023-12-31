import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

export const POST = async (req: any) => {
    
    try {
        const {userId, brand, name, price, description, photos} = await req.json()
        console.log(userId, brand, name, price, description, photos)
        await connectToDB()

        Product.create({creator: userId, brand, name, price, description, photos})



        return new Response("Success", {status: 201})
    } catch (error) {
        return new Response("Hiba a termék felvétele során!", {status: 500})
    }

}