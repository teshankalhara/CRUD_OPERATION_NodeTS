import { Request, Response } from "express";
import ProductModel from "../models/ProductModel";

export const createProduct = async (req: Request, res: Response) => {
    const { name, price, description, category } = req.body
    try {
        const product = new ProductModel({ name, price, description, category })
        await product.save()

        res.status(201).json(product)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}