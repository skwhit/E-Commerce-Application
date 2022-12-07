import "./App.css";
import { getProducts, getProductsByCategory } from "./utils/products";
import React, { useState, useEffect, useRef } from "react";
import ProductList from "./components/products/ProductList";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const initialState = {
    loading: false,
    error: false,
    products: [],
    category: ""
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
    <div className="App">
      <h1>hello</h1>
      {!state.products.length ? (
        <h3>Loading...</h3>
      ) : (
        <ProductList products={state.products} />
      )}
    </div>
  );
}

export default App;
