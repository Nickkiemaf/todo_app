import { allMyCategories, createCategory, createTask, edit, fetchAllTasks } from "../service/taskService.js";

export const task = async (req, res) => {

  try {

    const { user_id, task_name, description, deadline, category_id } = req.body

    if (!user_id || !task_name || !description || !deadline || !category_id) {
      return res.status(400).json({ message: "All fields required" })
    }

    const newTask = await createTask({ user_id, task_name, description, deadline, category_id })

    return res.status(200).json({
      message: "New task created",
      data: {
        task_name: newTask.task_name,
        description: newTask.description,
        deadline: newTask.deadline,
        category: newTask.category_id
      }
    })

  } catch (error) {
    console.log(error)
  }
}

export const category = async (req, res) => {

  try {

    const { name, color } = req.body

    if (!name || !color) {
      return res.status(400).json({
        message: "Enter category name and color"
      })
    }

    const categories = await createCategory({ name, color })

    return res.status(200).json({
      message: "New category created",
      data: categories
    })


  } catch (error) {
    console.log(error)
  }
}

export const allCategories = async (req, res) => {

  try {

    const allcategory = await allMyCategories()

    return res.status(200).json({
      data: allcategory

    })

  } catch (error) {
    console.log(error)
  }
}

export const allTasks = async (req, res) => {

  try {
    const { user_id } = req.body

    if (!user_id) {
      return res.status(400).json({ message: "Unverified user" })
    }

    const allUserTasks = await fetchAllTasks(user_id)

    return res.status(200).json({
      message: "All tasks",
      data: allUserTasks
    })

  } catch (error) {
    console.log(error)
  }
}

export const editTasks = async (req, res) => {

  try {

    const { task_name, description, deadline, category_id, user_id } = req.body

    const editingTask = await edit({
      task_name, description, deadline, category_id, user_id
    })

    return res.status(200).json({
      message: "Task edited",
      data: editingTask
    })

  } catch (error) {
    console.log(error)
  }
}