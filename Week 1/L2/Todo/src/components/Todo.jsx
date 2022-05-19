import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  //   THIS IS FOR DELETING TODO
  const onDelete = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  // THIS IS FOR INPUT VALUE STORE
  const handleChange = (e) => {
    setText(e.target.value);
  };

  //  THIS FOR BUTTON CLIKED EVENT
  const handleTodo = () => {
    setTodos([...todos, { id: Date.now(), value: text, isCompleted: false }]);
    setText("");
  };

  //   THIS IS FOR ENTER CLIKED EVENT
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { id: Date.now(), value: text, isCompleted: false }]);
      setText("");
    }
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Enter todo..."
        onKeyPress={onKeyPress}
      />
      <button onClick={handleTodo}>Add Todo</button>

      {/* APPENDING TODO DATA HERE */}
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />
      ))}
    </div>
  );
};
