import { myCompletedTask, myDoneTasks, myUnCompletedTask, myUnDoneTasks } from "../service/completedService.js"

export const doneTasks = async (req, res) => {

  try {

    const { user_id, task_id } = req.body

    if (!user_id) {
      return res.status(402).json({ message: "Unverified user" })
    }

    if (!task_id) {
      return res.status(402).json({ message: "Unverified task" })
    }

    const done = await myDoneTasks({ user_id, task_id })

    return res.status(200).json({
      message: "Task completed",
      data: done
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}

export const unDoneTasks = async (req, res) => {

  try {

    const { user_id, task_id } = req.body

    if (!user_id) {
      return res.status(402).json({ message: "Unverified user" })
    }

    if (!task_id) {
      return res.status(402).json({ message: "Unverified task" })
    }

    const undoneTasks = await myUnDoneTasks({ user_id, task_id })

    return res.status(200).json({
      message: "Complete your task",
      data: undoneTasks
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}


export const completedTasks = async (req, res) => {

  try {

    const { user_id } = req.body

    if (!user_id) {
      return res.status(402).json({ message: "Unverified user" })
    }

    const complete = await myCompletedTask({ user_id })

    return res.status(200).json({
      message: "Completed tasks",
      data: complete
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}

export const unCompletedTasks = async (req, res) => {

  try {

    const { user_id } = req.body

    if (!user_id) {
      return res.status(402).json({ message: "Unverified user" })
    }

    const unComplete = await myUnCompletedTask({ user_id })

    return res.status(200).json({
      message: "Pending tasks",
      data: unComplete
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}

