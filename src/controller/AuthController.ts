import { Request, Response } from "express"
import UserModel from "../models/UserModel"
import bcrypt from "bcryptjs"
import { generateJwt } from "../security/jwt"

export const login = async (req: Request, res: Response) => {
    const { userInput, password } = req.body

    try {
        /*
        const user = await UserModel.findOne({ username: username })
        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }
        */
        /*
        let user = await UserModel.findOne({ username: userInput })
        if (!user) {
            user = await UserModel.findOne({ email: userInput })
            if (!user) {
                res.status(404).json({ message: "User not found" })
                return
            }
        }*/
        const user = await UserModel.findOne({
            $or: [
                { username: userInput },
                { email: userInput }
            ]
        })
        if (!user) {
            res.status(404).json({ message: "User not found" })
            return
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) {
            res.status(400).json({ message: "Invalid credentials" })
            return
        }
        const token = generateJwt(user)
        res.status(200).json({ token })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}