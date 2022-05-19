import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo.title} />
        ))}
      </TodoList>
    </div>
  );
};
