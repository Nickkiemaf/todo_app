import { myDailyTask, myMonthlyTask } from "../service/dailyTaskService.js"

export const dailyTask = async (req, res) => {

  try {
    const { user_id } = req.body

    if (!user_id) {
      return res.status(402).json({
        message: "Authorization failed"
      })
    }

    const dail = await myDailyTask({ user_id })

    return res.status(200).json({
      message: "Today's tasks",
      data: dail
    })

  } catch (error) {
    console.log(error.message || "Internal Server error")
  }
}

export const monthlyTask = async (req, res) => {

  try {
    const { user_id } = req.body

    if (!user_id) {
      return res.status(402).json({
        message: "Authorization failed"
      })
    }

    const months = await myMonthlyTask({ user_id })

    return res.status(200).json({
      message: "Month's tasks",
      data: months
    })

  } catch (error) {
    console.log(error.message || "Internal Server error")
  }
}