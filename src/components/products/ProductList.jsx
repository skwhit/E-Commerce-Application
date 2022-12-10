import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import "./Products.css";
import { ThemeContext } from "../../hooks/ThemeContext";

export default function ProductList({
  state,
  setState,
  products,
  categoryCount,
}) {
  const { theme } = useContext(ThemeContext);

  const categories = document.body.querySelectorAll(".category");
  const selectedButton = "background-color: rgb(72, 91, 123); color: white";
  const defaultButton = "background-color: white; color: black";

  useEffect(() => {
    setState({...state, category: ""})
    categories.forEach((category) => (category.style = defaultButton));
    // const currentCat = sessionStorage.getItem("categoryID");
    // console.log(currentCat);
    // if (currentCat && categoryCount != 0) {
    //   document.getElementById(currentCat).style = selectedButton;
    // } 
      document.getElementById("cat1").style = selectedButton;
  }, []);

  const categoryChange = (e) => {
    categories.forEach((category) => (category.style = defaultButton));
    e.target.style = selectedButton;
    console.log(e);
    setState({ ...state, category: `${e.target.value}` });
    // sessionStorage.setItem("categoryID", `${e.target.id}`);
  };

  return (
    <>
      <div className={`categories-container ${theme}`}>
        <button
          id="cat1"
          // style={categoryStyles}
          onClick={categoryChange}
          className={`category`}
          value=""
        >
          ALL
        </button>
        <button
          id="cat2"
          // style={categoryStyles}
          onClick={categoryChange}
          className={`category`}
          value="men's clothing"
        >
          Men's Clothing
        </button>
        <button
          id="cat3"
          // style={categoryStyles}
          onClick={categoryChange}
          className={`category`}
          value="women's clothing"
        >
          Women's Clothing
        </button>
        <button
          id="cat4"
          // style={categoryStyles}
          onClick={categoryChange}
          className={`category`}
          value="jewelery"
        >
          Jewelery
        </button>
        <button
          id="cat5"
          // style={categoryStyles}
          onClick={categoryChange}
          className={`category`}
          value="electronics"
        >
          Electronics
        </button>
      </div>
      <div className={`products-container ${theme}`}>
        {products.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </div>
    </>
  );
}
