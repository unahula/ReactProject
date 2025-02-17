import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Task cannot be empty!"); // Prevent empty tasks
      return;
    }
    addTodo(value);
    setValue(""); // ✅ Clears input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please insert your plan..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Enter</button>
    </form>
  );
};