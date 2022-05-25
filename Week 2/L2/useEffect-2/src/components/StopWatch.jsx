import React, { useState, useEffect } from "react";

export const StopWatch = () => {
  const [timerId, setTimeId] = useState(null);
  const [watch, setWatch] = useState(0);

  const start = () => {
    if (!timerId) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      setTimeId(id);
    }
  };

  const pause = () => {
    clearInterval(timerId);
    setTimeId(null);
  };

  const reset = () => {
    clearInterval(timerId);
    setWatch(0);
    setTimeId(null);
  };

  return (
    <div>
      <h3>Stopwatch</h3>
      <h3>{watch}</h3>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
