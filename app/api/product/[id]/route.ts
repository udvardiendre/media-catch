
import { connectToDB } from "@/utils/database";
import Product from "@/models/product";


// GET 
export const GET = async (req: any, { params }: { params: { id: string } }) => {
    try {
        await connectToDB()

        const product = await Product.findById(params.id).populate('creator')
        if(!product) {
            return new Response("Product not found!", {status: 404})
        } else {
            return new Response(JSON.stringify(product),{status: 200})
        }
    } catch (error) {
        return new Response("Failed to fetch speific product",{status: 500})
    }
}

//PATCH
export const PATCH = async (req: any, { params }: { params: { id: string } }) => {

    const { brand, name, price, description, photos} = await req.json()

    try {
        console.log("Modified:" +  brand, name, price, description, photos)
        
        await connectToDB()

        const existingProduct = await Product.findById(params.id)
        
        if(!existingProduct) {
            return new Response("Product not found!", {status: 404})
        } else {

            existingProduct.brand = brand 
            existingProduct.name = name
            existingProduct.price = price
            existingProduct.description = description
            existingProduct.photos = photos

            await existingProduct.save()

            return new Response(JSON.stringify(existingProduct),{status: 200})
        }
    } catch (error) {
        console.log(`Failed to update speific product: ${error}`)
        return new Response(`Failed to update speific product: ${error}`,{status: 500})
    }
}

// DELETE
export const DELETE = async (req: any, { params }: { params: { id: string } }) => {

    try {
        console.log(params.id)
        await connectToDB()

        await Product.findByIdAndDelete(params.id)

        return new Response("Product deleted successfully",{status: 200})
        
    } catch (error) {
        return new Response("Failed to delete speific product",{status: 500})
    }
}