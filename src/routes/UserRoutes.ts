import express from "express"
import { createUser } from "../controller/UserController"

const router = express.Router()

router.post("/users", createUser)

export default router