import bcrypt from "bcryptjs"
import { pool } from "../config/db.js"
import { createUser, emailExist, userQuery } from "../model/userModel.js"
import { fetchTaskQuery } from "../model/taskModel.js"
import { generateToken } from "../middleware/authenticateUser.js"


export const userSignup = async (data) => {

  const client = await pool.connect()

  try {
    //check if user exists

    const userExists = await emailExist(data.email)

    if (userExists.rows.length > 0) {
      throw new Error("User already exists")
    }
    console.log(userExists)

    const hashedPassword = await bcrypt.hash(data.password, 8)

    const user = await client.query(userQuery,
      [
        data.name,
        data.email,
        data.phone,
        data.address,
        hashedPassword])

    console.log("userrr:", user)

    const userResult = user.rows[0]


    console.log("Insert result:", user.rows)
    console.log("Token", token)

    return userResult

  } catch (error) {
    console.log(error)
    throw error

  } finally {
    client.release()
  }
}

export const userLogin = async (data) => {

  const client = await pool.connect()

  try {

    //check if user exist
    const userExist = await emailExist(data.email)
    if (userExist.rows.length < 0) {
      throw "User does not exists"
    }

    const userData = userExist.rows[0]

    //compare password
    const passwordMatch = await bcrypt.compare(data.password, userData.password)

    if (!passwordMatch) {
      throw "Incorrect password"
    }

    //generate jwt token
    const token = generateToken(userData.id)

    return {
      userData,
      token
    }

  } catch (error) {
    console.log(error)
    throw error
  }
}