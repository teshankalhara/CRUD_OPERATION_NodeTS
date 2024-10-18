import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || '')
        console.log(`Mongodb connected: ${conn.connection.host}`)
    } catch (error: any) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default dbConnect