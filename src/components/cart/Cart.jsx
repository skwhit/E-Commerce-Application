import React, { useContext } from "react";
import { useCart } from "../../Context/Context";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import CartTotals from "./CartTotals";

export default function Cart() {
  const { state } = useCart();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={`cart-container ${theme}`}>
      {state.length ? (
        <>
          <div className="cart-items-container">
            <h1>Your items</h1>
            {state.map((item, index) => {
              return <CartCard item={item} index={index} />;
            })}
          </div>
          <div className="cart-totals-container">
            <CartTotals promo={true}/>
            <button onClick={() => navigate("/checkout")} className="checkout">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className={`empty-cart ${theme}`}>
          <h1>Your Cart is Currently Empty</h1>
          <button onClick={() => navigate("/products")}>
            Back to products
          </button>
        </div>
      )}
    </div>
  );
}
