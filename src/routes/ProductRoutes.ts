import express from "express"
import * as ProductController from "../controller/ProductController"

const router = express.Router()

router.post("/product", ProductController.createProduct)
router.get("/products", ProductController.getProducts)

export default router