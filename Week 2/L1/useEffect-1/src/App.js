import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:8080/todos").then();

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((e) => e.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);

  return (
    <div className="App">
      <input type="text" />
      {todos.map((todo) => (
        <h1>{todo.text}</h1>
      ))}
    </div>
  );
}

export default App;
