import React, { useState, useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext";
import "./Products.css";

export default function ProductCard({ product }) {

  const {theme} = useContext(ThemeContext);

  const {
    id,
    category,
    description,
    image,
    price,
    title = "",
    rating,
  } = product;

  let cardTitle = title;

  if (cardTitle.length > 47) {
    cardTitle = cardTitle.substring(0, 44) + "...";
  }
  
  const displayDetail = () => {
    console.log("hi")
  }

  return (
    <div className={`product-card-container ${theme}`}>
      <div className={`product-card-border ${theme}-card`}>
      <h3 className={`card-title ${theme}-text`}>{cardTitle}</h3>
        <div className="product-img-container">
          <img onClick={displayDetail} className="product-card-img" src={image} alt="Product Image" />
        </div>
        
        <div className="card-info">
          <h3 className={`${theme}-text`}>{`$${price}`}</h3>
          {/* <div>
            <button className="adjust-cart">-</button>
            <input
              onChange={quantityChange}
              className="cart-quantity"
              type="text"
              value={quantity}
            />
            <button className="adjust-cart">+</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
