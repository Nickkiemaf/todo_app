import { pool } from "../config/db.js";

export const completedstats = `
SELECT COUNT(*) FROM tasks 
WHERE completed = TRUE
`

export const uncompletedstats = `
SELECT COUNT(*) FROM tasks 
WHERE completed = FALSE
`

export const todaystats = `
SELECT COUNT(*) FROM tasks 
WHERE deadline >= CURRENT_DATE
AND deadline < CURRENT_DATE + INTERVAL '1 day'
`

export const monthlystats = `
SELECT COUNT(*) FROM tasks
WHERE deadline >= DATE_TRUNC('month', CURRENT_DATE)
AND deadline < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
`