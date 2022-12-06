import React from "react";
import "./Products.css";

export default function ProductCard({ product }) {
  const { id, category, description, image, price, title, rating } = product;

  let cardTitle = title;
  if (cardTitle.length > 53) {
    cardTitle = cardTitle.substring(0, 50) + "...";
  }

  return (
    <div className="product-card-container">
      <div className="product-img-container">
        <img className="product-card-img" src={image} alt="Product Image" />
        <button className="add-cart">+</button>
      </div>
      <h3 className="cardTitle">{cardTitle}</h3>
      <div>
        <h3>{price}</h3>
        <button>Details</button>
      </div>
    </div>
  );
}
