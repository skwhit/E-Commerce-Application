import { createContext, useState, useContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((item) => action.payload.id === item.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id && item.quantity < 99) {
            return {...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "CHANGE":
        const tempstate3 = state.map((item) => {
          if (item.id === action.payload.id && action.value > 0 && action.value < 100) {
            return {...item, quantity: action.value };
          } else {
            return item;
          }
        });
        return tempstate3;
      case "DECREASE":
        const tempstate4 = state.map((item) => {
          if (item.id === action.payload.id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate4;
      case "REMOVE":
        const tempstate5 = state.filter((item) => item.id !== action.payload.id)
        return tempstate5
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export function useCart() {
  return useContext(CartContext);
}
