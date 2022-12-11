import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Products.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

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

  const displayDetail = (e) => {
    console.log(e.target.id);
    navigate(`/products/${e.target.id}`, { state: { productId: e.target.id } });
  };

  return (
    <div className={`product-card-container ${theme}`}>
      <div className={`product-card-border ${theme}-card`}>
        <h3 className={`card-title ${theme}-text`}>{cardTitle}</h3>
        <div id={id} onClick={displayDetail} className="product-img-container">
          <img
            id={id}
            className="product-card-img"
            src={image}
            alt="Product Image"
          />
        </div>

        <div className="card-info">
          <h3 className={`${theme}-text`}>{`$${price}`}</h3>
        </div>
      </div>
    </div>
  );
}
