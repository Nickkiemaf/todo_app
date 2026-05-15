import { Pool } from "pg"
import dotenv from "dotenv"
dotenv.config()

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

export const testDatabase = async () => {
  try {
    const query = await pool.query(`SELECT NOW()`)
    console.log(`db connected`, query.rows[0])

  } catch (error) {
    console.log(error)
  }
}

testDatabase()
