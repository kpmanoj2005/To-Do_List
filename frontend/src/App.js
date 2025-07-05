import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

return (
  <div className="container">
    <h1>📝 To-Do List</h1>
    <TaskForm fetchTasks={fetchTasks} />
    <TaskList tasks={tasks} fetchTasks={fetchTasks} />
  </div>
);

}

export default App;
