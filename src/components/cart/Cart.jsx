import React from "react";
import { useCart } from "../../Context/Context";
import CartCard from "./CartCard";

export default function Cart() {
  const { state } = useCart();
  console.log(state);
  return (
    <div className="cart-container">
      {state.map((item, index) => (
        <CartCard item={item} index={index} />
      ))}
    </div>
  );
}
