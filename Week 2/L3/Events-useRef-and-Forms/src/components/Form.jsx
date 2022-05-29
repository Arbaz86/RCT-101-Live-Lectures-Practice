import React from "react";

export const Form = () => {
  return (
    <div>
      <h3>Form</h3>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Enter name..." />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Enter email..." />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Enter password..." />
      </div>
      <div>
        <label>Age</label>
        <input type="number" placeholder="Enter age..." />
      </div>
    </div>
  );
};
