import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h3>Count Down : {timer}</h3>
    </div>
  );
};
