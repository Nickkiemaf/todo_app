PROJECT TITLE: Todo App

FEATURES:

CREATE new users, tasks
READ tasks
UPDATE tasks
DELETE users, tasks

BASE_URL: https://todo-app-t31e.onrender.com

TABLE OF CONTENTS

1. About the project
Todo app is a web-based application that allows users to register and create tasks and set deadlines.

2. Built with
Express/nodejs
Postgresql

3. Routes
GET todo/stats

POST todo/signup
{ name, email, phone, address, password } = req.body

POST todo/login
{ email, password } = req.body

POST todo/createTask
{ user_id, task_name, description, deadline, category_id } = req.body

POST todo/createCategory
{ name, color } = req.body

GET todo/allcategory

PATCH todo/editTask
{ task_name, description, deadline, category_id, user_id } = req.body

GET todo/allTasks
{ user_id } = req.body

GET todo/completeTask
{ user_id } = req.body

GET todo/uncompleteTask
{ user_id } = req.body

GET todo/done
{ user_id, task_id } = req.body

GET todo/undone
{ user_id, task_id } = req.body

GET todo/dailyTask
{ user_id } = req.body

GET todo/monthlyTask
{ user_id } = req.body
