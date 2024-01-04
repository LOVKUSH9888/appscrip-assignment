"use client"
import React from "react";
import axios from "axios";

const Products = ({ filteredProducts }) => {
  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const idealFor = context.query.idealFor || "all";
  const occasion = context.query.occasion || "all";
  const work = context.query.work || "all";
  const fabric = context.query.fabric || "all";
  const segment = context.query.segment || "all";
  const suitableFor = context.query.suitableFor || "all";
  const rawMaterial = context.query.rawMaterial || "all";
  const pattern = context.query.pattern || "all";

  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  const filteredProducts = products.filter((product) => {
    return (
      (idealFor === "all" ||
        product.idealFor.toLowerCase() === idealFor.toLowerCase()) &&
      (occasion === "all" ||
        product.occasion.toLowerCase() === occasion.toLowerCase()) &&
      (work === "all" || product.work.toLowerCase() === work.toLowerCase()) &&
      (fabric === "all" ||
        product.fabric.toLowerCase() === fabric.toLowerCase()) &&
      (segment === "all" ||
        product.segment.toLowerCase() === segment.toLowerCase()) &&
      (suitableFor === "all" ||
        product.suitableFor.toLowerCase() === suitableFor.toLowerCase()) &&
      (rawMaterial === "all" ||
        product.rawMaterial.toLowerCase() === rawMaterial.toLowerCase()) &&
      (pattern === "all" ||
        product.pattern.toLowerCase() === pattern.toLowerCase())
    );
  });

  return {
    props: {
      filteredProducts,
    },
  };
}

export default Products;
