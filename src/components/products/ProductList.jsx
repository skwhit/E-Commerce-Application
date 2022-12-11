import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import "./Products.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { useNavigate } from "react-router-dom";
import loadingGif from "./loading-gif.gif";
import Loading from "../loading/Loading";

export default function ProductList({ state, setState, products, loading }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const categories = document.body.querySelectorAll(".category");
  const selectedButton = "background-color: rgb(72, 91, 123); color: white";
  const defaultButton = "background-color: white; color: black";

  useEffect(() => {
    setState({ ...state, category: "" });
    categories.forEach((category) => (category.style = defaultButton));
    document.getElementById("cat1").style = selectedButton;
  }, []);

  const categoryChange = (e) => {
    categories.forEach((category) => (category.style = defaultButton));
    e.target.style = selectedButton;
    console.log(e);
    setState({ ...state, category: `${e.target.value}` });
    navigate(`/products/${e.target.value}`);
    sessionStorage.setItem("categoryID", `${e.target.id}`);
  };

  return (
    <>
      <div className={`categories-container ${theme}`}>
        <button
          id="cat1"
          onClick={categoryChange}
          className={`category`}
          value=""
        >
          ALL
        </button>
        <button
          id="cat2"
          onClick={categoryChange}
          className={`category`}
          value="men's clothing"
        >
          Men's Clothing
        </button>
        <button
          id="cat3"
          onClick={categoryChange}
          className={`category`}
          value="women's clothing"
        >
          Women's Clothing
        </button>
        <button
          id="cat4"
          onClick={categoryChange}
          className={`category`}
          value="jewelery"
        >
          Jewelery
        </button>
        <button
          id="cat5"
          onClick={categoryChange}
          className={`category`}
          value="electronics"
        >
          Electronics
        </button>
      </div>
      <div className={`products-container ${theme}`}>
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <ProductCard key={uuidv4()} product={product} />
          ))
        )}
      </div>
    </>
  );
}
