import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, Logout } = useContext(AuthContext);

  const handleLoginClick = () => {
    // Login screen
    if (isAuth) {
      //he wants to logout
      Logout();
    } else {
      //he wants to login
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      Navbar:
      <NavLink to="/">Home</NavLink>
      <NavLink to="/feeds">Feeds</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <button onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};
