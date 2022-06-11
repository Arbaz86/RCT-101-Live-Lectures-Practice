import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    if (id === 1) {
      navigate("/products/1");
    }
    if (id === 2) {
      navigate("/products/2");
    }
  };

  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>
      <button onClick={() => handleOnClick(1)}>Go To Product 1</button>
      <button onClick={() => handleOnClick(2)}>Go To Product 2</button>
    </div>
  );
};
