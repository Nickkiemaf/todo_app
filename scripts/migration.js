import { pool } from "../config/db.js"
import { createTables } from "../model/todoModel.js"

export const runMigration = async () => {

  try {
    await createTables()
    await pool.end()

    console.log("Migration successful")

  } catch (error) {
    console.error(error)

  } finally {
    process.exit(0)
  }
}

runMigration()
