import React from "react";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import "./Products.css";

export default function ProductList({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={uuidv4()} product={product} />
      ))}
    </div>
  );
}
