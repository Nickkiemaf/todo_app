import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { testDatabase } from "./config/db.js"
import todoRouter from "./route/todo.js"
import statRouter from "./route/stats.js"
import { runMigration } from "../scripts/migration.js"
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

//routes
app.use("/todo", todoRouter)
app.use("/todo", statRouter)


const PORT = process.env.PORT || 10000

app.listen(PORT, () => {
  console.log("Server is running...")
  testDatabase()
  runMigration()
})

