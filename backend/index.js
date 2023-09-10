import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
dotenv.config()
const PORT = process.env.PORT || 3000

import connectDB from "./config/db.js"

connectDB()

const app = express()

app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT)
})