import React from "react";
import { useCart } from "../../Context/Context";
import CartCard from "./CartCard";

export default function Cart() {
  const { state } = useCart();
  console.log(state);
  return (
    <div className="cart-container">
      <div className="cart-item-container">
      {state.map((item, index) => {
        return <CartCard item={item} index={index} />;
      })}
      </div>
      <div className="cart-totals-container">
        
      </div>
    </div>
  );
}
