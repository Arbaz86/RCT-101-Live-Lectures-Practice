import React, { useState, useRef } from "react";

export const StopWatch = () => {
  // const [timerId, setTimeId] = useState(null);
  const timerId = useRef(null);
  const [watch, setWatch] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [startPause, setStartPause] = useState(false);

  const start = () => {
    setStartPause(true);
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => {
          if (prev <= 100) {
            return prev + 1;
          } else {
            setSec((prev) => {
              if (prev < 60) {
                return prev + 0.5;
              } else {
                setMin((prev) => {
                  return prev + 1;
                });
                return (prev = 0);
              }
            });
            return (prev = 0);
          }
        });
      }, 10);
      timerId.current = id;
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setStartPause(false);
  };

  const reset = () => {
    clearInterval(timerId.current);
    setWatch(0);
    setSec(0);
    setMin(0);
    timerId.current = null;
    setStartPause(false);
  };

  return (
    <div>
      <h3>Stopwatch</h3>
      <div>
        <span>
          {min < 10 ? "0" : ""}
          {min}
          {min <= 60 ? "m" : ""}
        </span>{" "}
        <span>
          {sec < 10 ? "0" : ""}
          {sec}
          {sec <= 60 ? "s" : ""}
        </span>{" "}
        <span>
          {watch < 10 ? "0" : ""}
          {watch}
        </span>
      </div>
      <div>
        <button onClick={startPause === true ? pause : start}>
          {startPause === true ? "Pause" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
