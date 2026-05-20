import { pool } from "../config/db.js";
import { completedstats, monthlystats, todaystats, uncompletedstats } from "../model/statsModel.js";


export const allStats = async () => {

  const client = await pool.connect()

  try {

    const completed = await client.query(completedstats)
    const uncompleted = await client.query(uncompletedstats)
    const today = await client.query(todaystats)
    const month = await client.query(monthlystats)

    const completedstatss = completed.rows[0].count
    const uncompletedstatss = uncompleted.rows[0].count
    const todaystatss = today.rows[0].count
    const monthstatss = month.rows[0].count

    return {
      completedstatss,
      uncompletedstatss,
      todaystatss,
      monthstatss
    }

  } catch (error) {
    console.log(error)

  } finally {
    client.release()
  }
}