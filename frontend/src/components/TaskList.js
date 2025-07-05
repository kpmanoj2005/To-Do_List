import React from "react";
import axios from "axios";

const TaskList = ({ tasks, fetchTasks }) => {
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (id, current) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !current });
    fetchTasks();
  };

  const updateTask = async (id, title) => {
    const newTitle = prompt("Edit task title:", title);
    if (newTitle) {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { title: newTitle });
      fetchTasks();
    }
  };

  return (
    <ul>
      {tasks.map(task => (
            <li key={task._id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={() => toggleComplete(task._id, task.completed)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => updateTask(task._id, task.title)}>Edit</button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
