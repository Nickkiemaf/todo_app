import { createTables } from "..src/model/todoModel.js"
import { pool } from "../src/config/db.js"


console.log("migration!!!!")

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
