import React from "react";
import { Timer } from "./components/Timer";
import "./App.css";
import Todo from "./components/Todo";
import { StopWatch } from "./components/StopWatch";

const App = () => {
  return (
    <div className="App">
      <Todo />
      {/* <Timer /> */}
      {/* <StopWatch /> */}
    </div>
  );
};

export default App;
