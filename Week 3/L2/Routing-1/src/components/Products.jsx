import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
export const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {productData.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </div>
        ))}
        <Outlet />
      </div>
    </div>
  );
};
