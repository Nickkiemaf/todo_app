import { pool } from "../config/db.js"

export const createUserTable = `CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(20),
  address VARCHAR(100),
  password VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`

export const createTasktable = `CREATE TABLE IF NOT EXISTS tasks(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id) ON DELETE CASCADE,
task_name VARCHAR(100),
description VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deadline TIMESTAMPTZ,
completed BOOLEAN DEFAULT FALSE
)`

export const createCategoryTable = `CREATE TABLE IF NOT EXISTS category(
id SERIAL PRIMARY KEY,
name VARCHAR(100),
color VARCHAR(100)
)`

export const alterTaskTable = `ALTER TABLE tasks ADD COLUMN IF NOT EXISTS category_id INT REFERENCES category(id);`

export const createTables = async () => {
  const client = await pool.connect()

  try {
    await client.query(createUserTable)
    console.log("User table created.")

    await client.query(createTasktable)
    console.log("Task table created")

    await client.query(createCategoryTable)
    console.log("Category table created")

    await client.query(alterTaskTable)
    console.log("Task table altered")


  } catch (error) {
    console.log(error)

  } finally {
    client.release()
  }

}

createTables()

