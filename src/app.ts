import express, { Application, Request, Response } from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db"
import CategoryRoutes from "./routes/CategoryRoutes"
import ProductRoutes from "./routes/ProductRoutes"
import UserRoutes from "./routes/UserRoutes"
import AuthRoutes from "./routes/AuthRoutes"

dotenv.config()

const app: Application = express()

app.use(express.json())

dbConnect()

app.get("/", (req: Request, res: Response) => {
    res.send("Hello")
})

app.use("/api", CategoryRoutes)
app.use("/api", ProductRoutes)
app.use("/api", UserRoutes)
app.use("/api", AuthRoutes)

app.listen(8000, () => {
    console.log("server running on port 8000")
})