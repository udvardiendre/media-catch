import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    brand: {
        type: String,
        required: [true, "Brand is required!"]
    },
    name: {
        type: String,
        required: [true, "Name is required!"],
    },
    price: {
        type: String,
        required: [true, "Price is required!"],
    },

    description: {
        type: String,
        required: [true, "Description is required!"],
    },

    photos:{
        type: [String],
        required: [true, "Photos are required!"],
    },
},
    {timestamps: true}
);

const Product = models.Product || model("Product", ProductSchema)

export default Product;