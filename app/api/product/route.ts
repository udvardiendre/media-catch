import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const GET = async (req: any) => {
    try {
        await connectToDB()

        const products = await Product.find({}).populate('creator')

        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all products", { status: 500 })
    }
} 