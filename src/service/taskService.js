
import { pool } from "../config/db.js"
import { allCategoryQuery, categoryQuery, editTaskQuery, fetchTaskQuery, taskQuery } from "../model/taskModel.js"


export const createTask = async (data) => {

  const client = await pool.connect()

  try {


    const newTask = await client.query(taskQuery,
      [
        data.user_id,
        data.task_name,
        data.description,
        data.deadline,
        data.category_id
      ])

    const taskCreationSuccessful = newTask.rows[0]

    console.log(taskCreationSuccessful)

    return taskCreationSuccessful


  } catch (error) {

    console.log(error)

  } finally {
    client.release()
  }
}

export const createCategory = async (data) => {

  const client = await pool.connect()

  try {

    const category = await client.query(categoryQuery,
      [
        data.name,
        data.color
      ]
    )
  } catch (error) {
    console.log(error)

  } finally {
    (await client).release()
  }

}

export const allMyCategories = async () => {

  const client = await pool.connect()

  try {

    const myCategories = await client.query(allCategoryQuery)

    const category = myCategories.rows

    return category

  } catch (error) {
    console.log(error)

  } finally {
    client.release()
  }
}

export const fetchAllTasks = async (user_id) => {

  const client = await pool.connect()

  try {

    const allUserTask = await client.query(fetchTaskQuery, [user_id])

    const allTask = allUserTask.rows

    return allTask

  } catch (error) {
    console.log(error)

  } finally {
    client.release()
  }
}

export const edit = async (data) => {

  const client = await pool.connect()

  try {

    const editing = await client.query(editTaskQuery, [
      data.task_name,
      data.description,
      data.deadline,
      data.category_id,
      data.user_id
    ])

    const edit = editing.rows[0]

    return edit

  } catch (error) {
    console.log(error)

  } finally {
    client.release()
  }
}

