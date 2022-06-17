import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { Login } = useContext(AuthContext);
  const [loginCreds, setLoginCreds] = useState({});

  // handleing input values
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginCreds);
    Login();
    //TODO
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <br />
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleOnChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter password..."
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
};
