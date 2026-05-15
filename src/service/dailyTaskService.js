import { pool } from "../config/db.js";
import { dailTaskQuery, monthlyTaskQuery } from "../model/dailyTaskModel.js";

export const myDailyTask = async (data) => {

  const client = await pool.connect()

  try {

    const daily = await client.query(dailTaskQuery,
      [
        data.user_id
      ]
    )

    if (daily.rows.length === 0) {
      throw new Error("No tasks for this month")
    }

    const dailyTasks = daily.rows

    return dailyTasks

  } catch (error) {
    console.log(error)
  } finally {
    client.release()
  }
}

export const myMonthlyTask = async (data) => {

  const client = await pool.connect()

  try {

    const month = await client.query(monthlyTaskQuery,
      [
        data.user_id
      ]
    )

    if (month.rows.length === 0) {
      throw new Error("No tasks for this month")
    }

    const monthlyTasks = month.rows

    return monthlyTasks


  } catch (error) {
    console.log(error)
    throw error


  } finally {
    client.release()
  }
}