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

    const dailyTasks = daily.rows[0]

    return dailyTasks

  } catch (error) {
    console.log(error)
  } finally {
    (await client).release()
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

    const monthlyTasks = daily.rows[0]

    return monthlyTasks

  } catch (error) {
    console.log(error)
  } finally {
    (await client).release()
  }
}