PROJECT TITLE
Todo App

FEATURES
CREATE new users, tasks
READ tasks
UPDATE tasks
DELETE users, tasks

TABLE OF CONTENTS

1. About the project
Todo app is a web-based application that allows users to register and create tasks and set deadlines.

2. Built with
Express/nodejs
Postgresql

3. Routes

POST todo/signup
{ name, email, phone, address, password } = req.body

POST /login
{ email, password } = req.body

POST /createTask
{ user_id, task_name, description, deadline, category_id } = req.body

POST /createCategory
{ name, color } = req.body

GET /allcategory

PATCH /editTask
{ task_name, description, deadline, category_id, user_id } = req.body

GET /allTasks
{ user_id } = req.body

GET /completeTask
{ user_id } = req.body

GET /uncompleteTask
{ user_id } = req.body

GET /done
{ user_id, task_id } = req.body

GET /undone
{ user_id, task_id } = req.body

router.get("/dailyTask", dailyTask)
{ user_id } = req.body

router.get("/monthlyTask", monthlyTask)
{ user_id } = req.body
