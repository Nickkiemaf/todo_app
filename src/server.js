import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { testDatabase } from "./config/db.js"
import todoRouter from "./route/todo.js"
dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "ok",
    message: "server is healthy",
    timestamp: Date.now()
  })
})

app.use("/todo", todoRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log("Server is running.")
  testDatabase()
  runMigration()
})