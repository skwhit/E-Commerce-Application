import React, { useContext } from "react";
import { useCart } from "../../Context/Context";
import "./Cart.css";
import { formatPrice } from "../../utils/functions";
import { ThemeContext } from "../../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function CartCard({ item, index }) {
  const { state, dispatch } = useCart();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const navToDetail = () => {
    navigate(`/products/${item.id}`, { state: { product: item } });
  };

  return (
    <div className="cart-card" key={index}>
      <div onClick={navToDetail} className="cart-img-container">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-info">
        <p>{item.title}</p>
        <div className="quantity-container">
          <div className="quantity-buttons">
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: item })}
              className="adjust-cart"
            >
              +
            </button>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CHANGE",
                  payload: item,
                  value: e.target.value,
                })
              }
              className="cart-quantity"
              type="text"
              value={item.quantity}
              onClick={(e) => e.target.select()}
            />
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: item })}
              className="adjust-cart"
            >
              -
            </button>
          </div>
          <p>{`$${formatPrice(item.quantity * item.price)}`}</p>
        </div>
      </div>
      <div className="cart-delete">
        <button
          id={index}
          onClick={(e) => dispatch({ type: "REMOVE", payload: item })}
        >
          <i className={`fa-solid fa-trash-can ${theme}-text`}></i>
        </button>
      </div>
    </div>
  );
}
