import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      {/* Task text */}
      <span className="todo-text">{todo.task}</span>

      {/* Icons Container */}
      <div className="icons">
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};