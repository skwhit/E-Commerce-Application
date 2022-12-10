import "./App.css";
import { getProducts, getProductsByCategory } from "./utils/products";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import ProductList from "./components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./hooks/ThemeContext";
import Details from "./components/details/Details"

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

  useEffect(() => {
    console.log(state.loading)
  },[state.loading])

  const providerTheme = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

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
                  loading={state.loading}
                />
              }
            />
            <Route
              path={`/products/${state.category}`}
              element={
                <ProductList
                  state={state}
                  setState={setState}
                  products={state.products}
                  categoryCount={state.categoryCount}
                  loading={state.loading}
                  // category={state.category}
                />
              }
            />
            {/* <Route
              path={`/products/${state.category}/:id`}
              element={
                <Details />
              }
            /> */}
          </Routes>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
