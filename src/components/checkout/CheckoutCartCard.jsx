import React, { useContext } from "react";
import { formatPrice } from "../../utils/functions";
import { ThemeContext } from "../../Context/ThemeContext";

export default function CheckoutCartCard({ item, index }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="cart-card" key={index}>
      <div className="cart-img-container">
        <img src={item.image} alt="" />
      </div>
      <div className="checkout-cart-info">
        <p>{item.title}</p>
        <div className="quantity-container">
          <div className="quantity-buttons"></div>
          <p>{`$${formatPrice(item.quantity * item.price)}`}</p>
        </div>
      </div>
    </div>
  );
}
