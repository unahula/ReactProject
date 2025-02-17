import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  
  const toggleEditTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  
  const updateTask = (updatedTask, id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
    ));
  };

  return (
    <div>
      <h1>List of my plan...</h1>
      <TodoForm addTodo={addTodo} />

      {todos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={updateTask} task={todo} />
          ) : (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={toggleEditTodo} />
          )
        )
      )}
    </div>
  );
};