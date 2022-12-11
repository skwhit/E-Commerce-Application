import React from "react";
import { useCart } from "../../Context/Context";
import "./Cart.css";

export default function CartCard({ item, index }) {
  const { state, dispatch } = useCart();
  console.log(item);
  item.quantity = 1;
  return (
    <div className="cart-card" key={index}>
      <div className="cart-img-container">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-info">
        <p>{item.title}</p>
        <div className="quantity-container">
          <p>{`$${item.quantity * item.price}`}</p>
          <div className="quantity-buttons">
            <button className="adjust-cart">+</button>
            <input
              //   onChange={quantityChange}
              className="cart-quantity"
              type="text"
              value={item.quantity}
            />
            <button className="adjust-cart">-</button>
          </div>
        </div>
      </div>
      <div className="cart-delete">
        <button>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
