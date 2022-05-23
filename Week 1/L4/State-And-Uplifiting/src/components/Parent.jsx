import { useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";

export const Parent = () => {
  const [info, setInfo] = useState("");

  return (
    <div>
      <h2>Parent</h2>
      <Child1 info={info} setInfo={setInfo} />
      <Child2 info={info} />
    </div>
  );
};
