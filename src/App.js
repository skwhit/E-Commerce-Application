import "./App.css";
import { getProducts, getProductsByCategory } from "./utils/products";
import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import Details from "./components/details/Details";
import { CartContext } from "./Context/Context";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Submitted from "./components/submitted/Submitted";

function App() {
  const initialState = {
    loading: false,
    error: false,
    products: [],
    category: "",
  };

  const [state, setState] = useState(initialState);
  const [theme, setTheme] = useState("light");
  const isMounted = useRef(false);
  const cartState = useContext(CartContext);
  console.log(cartState);

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    sessionStorage.removeItem("categoryID");
    getProducts(state, setState);
  }, []);

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    if (isMounted.current) {
      !state.category.length
        ? getProducts(state, setState)
        : getProductsByCategory(state, setState, state.category);
    } else {
      isMounted.current = true;
    }
  }, [state.category]);

  const providerTheme = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={providerTheme}>
      <div id="app">
        <header className={`${theme}`}>
          <Navbar />
        </header>
        <main className={`${theme}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductList
                  state={state}
                  setState={setState}
                  products={state.products}
                  categoryCount={state.categoryCount}
                  loading={state.loading}
                />
              }
            />
            <Route path={`/products/:id`} element={<Details />} />
            <Route path={`/cart`} element={<Cart />} />
            <Route path={`/checkout`} element={<Checkout />} />
            <Route path={`/submitted`} element={<Submitted />} />
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
