import React, { useContext } from "react";
import { useCart } from "../../Context/Context";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/functions";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Cart() {
  const { state } = useCart();
  const {theme} = useContext(ThemeContext)
  const navigate = useNavigate();
  console.log(state);

  const subtotal = () => {
    let subtotal = 0;
    state.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };

  const shipping = 5;
  const salesTax = () => subtotal() * 0.0725;
  const total = () => {
    const total = subtotal() + shipping + salesTax();
    return formatPrice(total);
  };

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
            <div className={`cart-totals ${theme}-totals`}>
              <h2 className={`${theme}-border`}>Order Summary</h2>
              <input type="text" placeholder="HAVE A PROMO CODE?" />
              <div>
                <p>Subtotal</p>
                <p>{`$${formatPrice(subtotal())}`}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p>{`$${formatPrice(shipping)}`}</p>
              </div>
              <div>
                <p>Sales Tax</p>
                <p>{`$${formatPrice(salesTax())}`}</p>
              </div>
              <div className={`cart-total ${theme}-border`}>
                <p>Total</p>
                <p>{`$${formatPrice(total())}`}</p>
              </div>
            </div>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h1>Your Cart is Currently Empty</h1>
          <button onClick={() => navigate("/products")}>
            Back to products
          </button>
        </div>
      )}
    </div>
  );
}
