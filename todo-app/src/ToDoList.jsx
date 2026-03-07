import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatesTasks = [...tasks];
      [updatesTasks[index], updatesTasks[index - 1]] = [
        updatesTasks[index - 1],
        updatesTasks[index],
      ];

      setTasks(updatesTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length) {
      const updatesTasks = [...tasks];
      [updatesTasks[index], updatesTasks[index + 1]] = [
        updatesTasks[index + 1],
        updatesTasks[index],
      ];
      setTasks(updatesTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="del-btn" onClick={() => removeTask(index)}>
              Delete
            </button>

            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              👆
            </button>

            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
