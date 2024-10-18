import express from "express"
import * as CategoryController from "../controller/CategoryController"

const router = express.Router()

router.post("/category", CategoryController.createCategory)
router.get("/categories", CategoryController.getCategories)

export default router