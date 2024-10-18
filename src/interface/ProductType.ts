import { Document } from "mongoose"
import CategoryType from "./CategoryType"

interface ProductType extends Document {
    name: string
    price: number
    description: string
    category: CategoryType
    createdAt: Date
    updatedAt: Date
}

export default ProductType