"use client"
import React from "react";
import axios from "axios";

const Products = ({ sortedProducts }) => {
  return (
    <div>
      {sortedProducts.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const sortOption = context.query.sort || "newer_first";

  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  if (sortOption === "newer_first") {
    products.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === "low_to_high") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high_to_low") {
    products.sort((a, b) => b.price - a.price);
  }

  return {
    props: {
      sortedProducts: products,
    },
  };
}

export default Products;
