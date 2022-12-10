import "./App.css";
import { getProducts, getProductsByCategory } from "./utils/products";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./hooks/ThemeContext"

function App() {
  const initialState = {
    loading: false,
    error: false,
    products: [],
    category: "",
    categoryCount: 0
  };

  const [state, setState] = useState(initialState);
  const [theme, setTheme] = useState('light');
  const isMounted = useRef(false);

  useEffect(() => {
    setState({...state, loading: true, categoryCount: state.categoryCount + 1})
    sessionStorage.removeItem('categoryID');
    getProducts(state, setState);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      !state.category.length
        ? getProducts(state, setState)
        : getProductsByCategory(state, setState, state.category);
    } else {
      isMounted.current = true;
    }
  }, [state.category]);

  useEffect(() => {
    console.log(state.category);
  }, [state.category]);

  useEffect(() => {
    console.log(state.products);
  }, [state.products]);

  const providerTheme = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={providerTheme}>
    <div id="app">
    <header className={`${theme}`}>
      <Navbar />
      </header>
      <main>
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
              />
            }
          />
          {/* <Route
            path={`/products/${state.category}`}
            element={<ProductList products={state.products} />}
          /> */}
        </Routes>
      </main>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
