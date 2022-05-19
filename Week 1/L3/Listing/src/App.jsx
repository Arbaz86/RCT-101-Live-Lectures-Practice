import { useState } from "react";
import { Counter } from "./components/Counter";
import { TodoApp } from "./components/TodoApp";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Show TodoApp" : "Show Counter"}
      </button>
      {toggle ? <Counter /> : <TodoApp />}
    </div>
  );
}

export default App;
