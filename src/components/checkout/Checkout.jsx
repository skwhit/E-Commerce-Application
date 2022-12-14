import React, { useEffect, useState } from "react";
import "./Checkout.css";
import CheckoutCartCard from "./CheckoutCartCard";
import { useCart } from "../../Context/Context";
import CartTotals from "../cart/CartTotals";
import acceptedCards from "./acceptedCards.png";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const initialShippingState = {
    Name: "",
    Email: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
  };

  const initialBillingState = {
    Name: "",
    Email: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
  };

  const initialPaymentState = {
    CardName: "",
    CardNumber: "",
    ExpMonth: "",
    ExpYear: "",
    CVV: "",
  };

  const [shipping, setShipping] = useState(initialShippingState);
  const [billing, setBilling] = useState(initialBillingState);
  const [payment, setPayment] = useState(initialPaymentState);

  const handleShippingChange = (e) => {
    setShipping((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleBillingChange = (e) => {
    setBilling((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handlePaymentChange = (e) => {
    setPayment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handlePopulateBilling = (e) => {
    e.target.checked ? setBilling(shipping) : setBilling(initialBillingState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "REMOVEALL" });
    navigate("/submitted");
  };

  return (
    <section className="checkout-container">
      <div className="checkout-info">
        <div className="checkout-totals-container">
          <CartTotals promo={false} />
          <div className="checkout-cart-container">
            {state.map((item, index) => (
              <CheckoutCartCard item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <form className="user-info-container">
        <div className="shipping">
          <h1>Shipping Address</h1>
          <div className="name">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleShippingChange}
              value={shipping.Name}
              id="name"
              name="Name"
              type="text"
              placeholder="John M. Doe"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleShippingChange}
              value={shipping.Email}
              id="email"
              name="Email"
              type="email"
              placeholder="John@example.com"
            />
          </div>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              onChange={handleShippingChange}
              value={shipping.Address}
              id="address"
              name="Address"
              type="text"
              placeholder="386 E. Brooks Street"
            />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              onChange={handleShippingChange}
              value={shipping.City}
              id="city"
              name="City"
              type="text"
              placeholder="Fresno"
            />
          </div>
          <div className="state-zip">
            <div className="state">
              <label htmlFor="state">State</label>
              <input
                onChange={handleShippingChange}
                value={shipping.State}
                id="state"
                name="State"
                type="text"
                placeholder="CA"
              />
            </div>
            <div className="zip">
              <label htmlFor="zip">Zip</label>
              <input
                onChange={handleShippingChange}
                value={shipping.Email}
                id="zip"
                name="Zip"
                type="text"
                placeholder="10001"
              />
            </div>
          </div>
        </div>
        <div className="billing">
          <div className="billing-header">
            <h1>Billing Address</h1>
            <label htmlFor="populate-billing">Same as shipping?</label>
            <input
              onClick={handlePopulateBilling}
              id="populate-billing"
              type="checkbox"
            />
          </div>
          <div className="name">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={handleBillingChange}
              value={billing.Name}
              id="name"
              name="Name"
              type="text"
              placeholder="John M. Doe"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleBillingChange}
              value={billing.Email}
              id="email"
              name="Email"
              type="email"
              placeholder="John@example.com"
            />
          </div>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              onChange={handleBillingChange}
              value={billing.Address}
              id="address"
              name="Address"
              type="text"
              placeholder="386 E. Brooks Street"
            />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              onChange={handleBillingChange}
              value={billing.City}
              id="city"
              name="City"
              type="text"
              placeholder="Fresno"
            />
          </div>
          <div className="state-zip">
            <div className="state">
              <label htmlFor="state">State</label>
              <input
                onChange={handleBillingChange}
                value={billing.State}
                id="state"
                name="State"
                type="text"
                placeholder="CA"
              />
            </div>
            <div className="zip">
              <label htmlFor="zip">Zip</label>
              <input
                onChange={handleBillingChange}
                value={billing.Email}
                id="zip"
                name="Zip"
                type="text"
                placeholder="10001"
              />
            </div>
          </div>
        </div>
        <div className="payment">
          <h1>Payment</h1>
          <div className="cards">
            <div className="accepted-cards">
              <img src={acceptedCards} alt="" />
            </div>
          </div>
          <div className="card-name">
            <label htmlFor="card-name">Name on Card</label>
            <input
              onChange={handlePaymentChange}
              value={payment.CardName}
              id="card-name"
              type="text"
              placeholder="John Michael Doe"
            />
          </div>
          <div className="card-number">
            <label htmlFor="card-number">Card Number</label>
            <input
              onChange={handlePaymentChange}
              value={payment.CardNumber}
              id="card-number"
              type="text"
              placeholder="1111-2222-3333-4444"
            />
          </div>
          <div className="exp-month">
            <label htmlFor="exp-month">Exp Month</label>
            <input
              onChange={handlePaymentChange}
              value={payment.ExpMonth}
              id="exp-month"
              type="text"
              placeholder="September"
            />
          </div>
          <div className="exp-cvv">
            <div className="exp-year">
              <label htmlFor="exp-year">Exp Year</label>
              <input
                onChange={handlePaymentChange}
                value={payment.ExpYear}
                id="exp-year"
                type="text"
                placeholder="2026"
              />
            </div>
            <div className="CVV">
              <label htmlFor="CVV">CVV</label>
              <input
                onChange={handlePaymentChange}
                value={payment.CVV}
                id="CVV"
                type="text"
                placeholder="394"
              />
            </div>
          </div>
        </div>
        <div className="checkout-submit-container">
          <button
            className="checkout-submit"
            onClick={handleFormSubmit}
            type="submit"
          >
            Submit your order
          </button>
        </div>
      </form>
    </section>
  );
}
