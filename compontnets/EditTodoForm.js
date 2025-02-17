import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task); // ✅ Set initial state to existing task

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Task cannot be empty!"); // Prevent empty tasks
      return;
    }
    editTodo(value, task.id); // ✅ Pass updated task and ID
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};