import express from "express"
import * as UserController from "../controller/UserController"

const router = express.Router()

router.post("/users", UserController.createUser)
router.get("/users",UserController.getUsers)

export default router