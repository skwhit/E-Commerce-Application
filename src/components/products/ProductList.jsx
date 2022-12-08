import React, {useState} from "react";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import "./Products.css";

export default function ProductList({ state, setState, products }) {

  const categoryChange = (e) => {
    console.log(e.target.value);
    setState({...state, category: `${e.target.value}`})
  }

  return (
    <>
      <div className="categories-container">
        <button onClick={categoryChange} autoFocus className="category" value="All">ALL</button>
        <button onClick={categoryChange} className="category" value="Men's Clothing">Men's Clothing</button>
        <button onClick={categoryChange} className="category" value="Women's Clothing">Women's Clothing</button>
        <button onClick={categoryChange} className="category" value="jewelry">Jewelry</button>
        <button onClick={categoryChange} className="category" value="electronics">Electronics</button>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </div>
    </>
  );
}
