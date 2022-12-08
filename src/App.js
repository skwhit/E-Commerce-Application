import "./App.css";
import { getProducts, getProductsByCategory } from "./utils/products";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  const initialState = {
    loading: false,
    error: false,
    products: [],
    category: "",
  };

  const [state, setState] = useState(initialState);
  const isMounted = useRef(false);

  useEffect(() => {
    getProducts(state, setState);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      state.category.length
        ? getProducts(state, setState)
        : getProductsByCategory(state, setState);
    } else {
      isMounted.current = true;
    }
  }, [state.category]);

  useEffect(() => {
    console.log(state.products);
  }, [state.products]);

  return (
    <div id ="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList products={state.products} />}
          />
          <Route
            path={`/products/${state.category}`}
            element={<ProductList products={state.products} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
