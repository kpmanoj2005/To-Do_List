📝 To-Do List MERN App

A full-stack To-Do List application built using the MERN stack (MongoDB, Express, React, Node.js) that supports full CRUD operations.

---

## 🚀 Features

- ✅ Create tasks
- 📋 View all tasks
- ✏️ Update task names
- 🗑️ Delete tasks
- ✔️ Mark tasks as completed

---

## 🛠️ Technologies Used

- **Frontend:** React, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Styling:** CSS
- **Tools:** Git, GitHub, dotenv

---

## 📁 Folder Structure

```
todo-crud-app/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   └── index.js
│   ├── App.css
│   └── public/
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-crud-app.git
cd todo-crud-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```ini
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todo_crud
```

Start the backend server:

```bash
node server.js
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## ✅ API Endpoints

| Method | Endpoint           | Description        |
|--------|--------------------|-------------------|
| GET    | /api/tasks         | Get all tasks     |
| POST   | /api/tasks         | Create new task   |
| PUT    | /api/tasks/:id     | Update a task     |
| DELETE | /api/tasks/:id     | Delete a task     |

---