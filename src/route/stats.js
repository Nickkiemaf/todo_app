import express, { Router } from "express"
import { authenticate } from "../middleware/authenticateUser.js"
import { stats } from "../controller/statsController.js"

const router = express.Router()

router.get("/stats", authenticate, stats)

export default router