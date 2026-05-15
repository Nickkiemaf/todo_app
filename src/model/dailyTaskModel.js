import { pool } from "../config/db.js";

export const dailTaskQuery = `
SELECT * FROM tasks
WHERE user_id = $1 
AND deadline  >= CURRENT_DATE 
AND deadline < CURRENT_DATE + INTERVAL '1 day'
`

export const monthlyTaskQuery = `
SELECT * FROM tasks
WHERE user_id = $1
AND deadline >= DATE_TRUNC('month', CURRENT_DATE)
AND deadline < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
`

