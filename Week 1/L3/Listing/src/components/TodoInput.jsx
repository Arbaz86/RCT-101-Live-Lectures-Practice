import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleList = () => {
    const payload = {
      id: uuid(),
      title: text,
      status: false,
    };
    addTodo(payload);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="new todo item"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleList}>Add</button>
    </div>
  );
};
