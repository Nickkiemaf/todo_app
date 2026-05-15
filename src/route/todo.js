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
router.post("/createTask", task)
router.post("/createCategory", category)
router.get("/allcategory", allCategories)
router.patch("/editTask", editTasks)
router.get("/allTasks", allTasks)
router.get("/completeTask", completedTasks)
router.get("/uncompleteTask", unCompletedTasks)
router.get("/done", doneTasks)
router.get("/undone", unDoneTasks)
router.get("/dailyTask", dailyTask)
router.get("/monthlyTask", monthlyTask)


export default router

