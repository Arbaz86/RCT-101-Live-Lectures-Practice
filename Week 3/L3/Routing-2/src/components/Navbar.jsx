import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // Login screen
    navigate("/login");
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
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};
