import { Request, Response } from "express"
import UserModel from "../models/UserModel"
import bcrypt from "bcryptjs"

export const createUser = async (req: Request, res: Response) => {
    const { username, password, firstname, lastname, email } = req.body

    if (!username || !password || !firstname || !lastname || !email) {
        res.status(400).json({ message: "All Fields are Required" })
        return
    }

    const existingUser = await UserModel.findOne({ username: username })
    if (existingUser) {
        res.status(400).json({ message: "User already exists" })
        return
    }

    try {
        const user = new UserModel({
            username: username,
            password: await bcrypt.hash(password, 10),
            firstname: firstname,
            lastname: lastname,
            email: email
        })
        await user.save()

        res.status(201).json(user)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}