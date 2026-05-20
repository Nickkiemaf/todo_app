import { pool } from "../config/db.js"
import { completedTaskQuery, doneTaskQuery, unCompletedTaskQuery, undoneTaskQuery } from "../model/taskModel.js"

export const myDoneTasks = async (data) => {

  const client = await pool.connect()

  try {

    const done = await client.query(doneTaskQuery,
      [
        data.user_id,
        data.task_id
      ])

    const newlyTask = done.rows[0]


    return newlyTask

  } catch (error) {
    console.log(error)
    throw error

  } finally {
    client.release()
  }
}

export const myUnDoneTasks = async (data) => {

  const client = await pool.connect()

  try {

    const unDone = await client.query(undoneTaskQuery,
      [
        data.user_id,
        data.task_id
      ])

    const undone = unDone.rows[0]

    return undone

  } catch (error) {
    console.log(error)
    throw error

  } finally {
    client.release()
  }
}

export const myCompletedTask = async (data) => {

  const client = await pool.connect()

  try {

    const completed = await client.query(completedTaskQuery,
      [
        data.user_id
      ])

    const completeTask = completed.rows[0]

    return completeTask

  } catch (error) {
    console.log(error)
    throw error

  } finally {
    client.release()
  }

}

export const myUnCompletedTask = async (data) => {


  const client = await pool.connect()

  try {

    const unCompleted = await client.query(unCompletedTaskQuery,
      [
        data.user_id
      ])

    const uncompleteTask = unCompleted.rows[0]

    return uncompleteTask

  } catch (error) {
    console.log(error)
    throw error

  } finally {
    client.release()
  }
}