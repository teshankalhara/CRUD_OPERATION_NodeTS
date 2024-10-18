import mongoose, { Schema } from "mongoose"
import CategoryType from "../interface/CategoryType"

const categorySchema = new Schema<CategoryType>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

const CategoryModel = mongoose.model<CategoryType>("category", categorySchema)

export default CategoryModel