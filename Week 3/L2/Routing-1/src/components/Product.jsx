import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  const getProduct = () => {
    axios.get(`http://localhost:8080/products/${id}`).then(({ data }) => {
      setProduct(data);
      console.log(product.title);
    });
  };

  return (
    <div>
      Product id: {id} : {product.title}
    </div>
  );
};
