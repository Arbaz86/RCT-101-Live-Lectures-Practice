import React, { useState, useEffect, useRef } from "react";

export const StopWatch = () => {
  // const [timerId, setTimeId] = useState(null);
  const timerId = useRef(null);
  const [watch, setWatch] = useState(0);

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      timerId.current = id;
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const reset = () => {
    clearInterval(timerId.current);
    setWatch(0);
    timerId.current = null;
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
