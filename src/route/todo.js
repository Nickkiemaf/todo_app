import express, { Router } from "express"
import { login, signup } from "../controller/todoController.js"
import { allCategories, allTasks, category, editTasks, task } from "../controller/taskController.js"
//import { fetchAllTasks } from "../service/taskService.js"
import { authenticate } from "../middleware/authenticateUser.js"
import { completedTasks, doneTasks, unCompletedTasks, unDoneTasks } from "../controller/completedController.js"
import { dailyTask, monthlyTask } from "../controller/dailyTaskController.js"

const router = express.Router()


router.post("/signup", signup)
router.post("/login", login)
router.post("/createTask", authenticate, task)
router.post("/createCategory", authenticate, category)
router.get("/allcategory", authenticate, allCategories)
router.patch("/editTask", authenticate, editTasks)
router.get("/allTasks", authenticate, allTasks)
router.get("/completeTask", authenticate, completedTasks)
router.get("/uncompleteTask", authenticate, unCompletedTasks)
router.get("/done", authenticate, doneTasks)
router.get("/undone", authenticate, unDoneTasks)
router.get("/dailyTask", authenticate, dailyTask)
router.get("/monthlyTask", authenticate, monthlyTask)


export default router

