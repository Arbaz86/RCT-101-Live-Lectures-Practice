import React from "react";

export const Child1 = (props) => {
  return (
    <div>
      <h3>Child1</h3>
      <input
        type="text"
        onChange={(e) => {
          props.setInfo(e.target.value);
        }}
      />
      <div>{props.info}</div>
    </div>
  );
};
