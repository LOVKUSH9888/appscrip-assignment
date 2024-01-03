"use client";
import React, { useState, useEffect } from "react";


const ProductSearch = () => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Update the product count based on the fetched data
        setProductCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <p className="text-dark">{productCount} ITEMS</p>
    </div>
  );
};

export default ProductSearch;
