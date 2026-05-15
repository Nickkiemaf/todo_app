import { pool } from "../config/db.js";

export const taskQuery = `
INSERT INTO tasks (user_id, task_name, description, deadline, category_id)
VALUES ($1, $2, $3, $4, $5)
RETURNING *
`

export const fetchTaskQuery = `
SELECT * FROM tasks 
WHERE user_id = $1
`
export const editTaskQuery = `
UPDATE tasks
SET task_name = COALESCE($1, task_name),
description = COALESCE($2, description),
deadline = COALESCE($3, deadline),
category_id = COALESCE($4, category_id)
WHERE id = $5
RETURNING *
`

export const categoryQuery = `
INSERT INTO category(name, color)
VALUES($1, $2)
RETURNING *
`

export const allCategoryQuery = `
SELECT * FROM category
`

export const doneTaskQuery = `
UPDATE tasks
SET completed = TRUE
WHERE user_id = $1 AND id = $2
RETURNING *
  `

export const undoneTaskQuery = `
UPDATE tasks
SET completed = FALSE
WHERE user_id = $1 AND id = $2
RETURNING *
  `

export const completedTaskQuery = `
SELECT * FROM tasks
WHERE user_id = $1 AND completed = TRUE
  `

export const unCompletedTaskQuery = `
SELECT * FROM tasks
WHERE user_id = $1 AND completed = FALSE
  `
