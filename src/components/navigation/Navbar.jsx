import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DarkMode from "../darkmode/DarkMode";
import { ThemeContext } from "../../hooks/ThemeContext";

export default function Navbar() {

  const {theme} = useContext(ThemeContext);

  return (
    <nav id={`${theme}`}>
      <div className="logo-container">
        <img class="logo" src="./logo.png" alt="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link id={`${theme}`} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link id={`${theme}`} className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link id={`${theme}`} className="nav-link" to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
        <li id={`${theme}`} className="nav-item">
          <DarkMode className="NavLink" />
        </li>
        {/* <li>
                <Link to="/products/:id">Home</Link>
            </li> */}
      </ul>
    </nav>
  );
}
