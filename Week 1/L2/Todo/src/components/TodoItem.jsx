import { useState } from "react";
import "./TodoItem.css";

export const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  return (
    <div className="todo-list">
      <input
        type="checkbox"
        className="input-checkbox"
        checked={isCompleted}
        onChange={(e) => {
          setIsCompleted(e.target.checked);
          console.log(e.target.checked);
        }}
      />
      <div className={isCompleted ? "striked" : ""}>{todo.value}</div>
      <button
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
