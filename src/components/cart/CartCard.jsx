import React from "react";
import { useCart } from "../../Context/Context";
import "./Cart.css";

export default function CartCard({ item, index }) {
  const { state, dispatch } = useCart();
  console.log(item);
  // item.quantity = 1;
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
            <button onClick={()=>dispatch({type: 'INCREASE', payload: item})} className="adjust-cart">+</button>
            <input
              onChange={(e)=>dispatch({type: 'CHANGE', payload: item, value: e.target.value })}
              className="cart-quantity"
              type="text"
              value={item.quantity}
            />
            <button onClick={()=>dispatch({type: 'DECREASE', payload: item})} className="adjust-cart">-</button>
          </div>
        </div>
      </div>
      <div className="cart-delete">
        <button id={index} onClick={(e) => dispatch({ type: "REMOVE", payload: item })}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
