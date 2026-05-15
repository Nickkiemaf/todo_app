import { pool } from "../config/db.js";

export const userQuery = `
INSERT INTO users ( name, email, phone, address, password)
VALUES ($1, $2, $3, $4, $5)
RETURNING *
`

// export const taskQuery = `
// INSERT INTO tasks (task_name, description, deadline, completed)
// VALUES ($1, $2, $3, $4)
// RETURNING *
// `

export const createUser = async (user) => {
  const result = await pool.query(`
    INSERT INTO users ( name, email, phone, address, password),
    VALUES ($1, $2, $3, $4, $5),
RETURNING *
    `,
    [user.name, user.email, user.phone, user.address, user.password])
  return result
}



export const emailExist = async (email) => {
  return await pool.query(`SELECT * FROM users WHERE email = $1`, [email])
}