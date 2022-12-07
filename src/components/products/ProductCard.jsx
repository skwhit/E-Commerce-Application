import React, { useState } from "react";
import "./Products.css";

export default function ProductCard({ product }) {
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
    <div className="product-card-container">
      <div className="product-card-border">
      <h3 className="card-title">{cardTitle}</h3>
        <div className="product-img-container">
          <img onClick={displayDetail} className="product-card-img" src={image} alt="Product Image" />
        </div>
        
        <div className="card-info">
          <h3>{`$${price}`}</h3>
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
