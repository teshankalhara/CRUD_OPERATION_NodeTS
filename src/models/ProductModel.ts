import mongoose, { Schema } from "mongoose"
import ProductType from "../interface/ProductType"

const ProductSchema = new Schema<ProductType>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const ProductModel = mongoose.model<ProductType>("product", ProductSchema)

export default ProductModel