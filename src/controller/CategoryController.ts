import { Request, Response } from "express"
import CategoryModel from "../models/CategoryModel"

export const createCategory = async (req: Request, res: Response) => {
    const { name } = req.body

    try {
        const category = new CategoryModel({ name })
        await category.save()
        res.status(201).json(category)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await CategoryModel.find()
        res.status(200).json(categories)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
