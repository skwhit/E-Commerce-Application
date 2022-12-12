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
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate2;
      case "DECREASE":
        const tempstate3 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate3;
      case "REM":
        return [state.filter((item) => action.payload !== state.indexOf(item))];
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

// const CartProvider = (props) => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
// };

// export const CartContext = createContext(null);
