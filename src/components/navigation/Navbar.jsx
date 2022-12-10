import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DarkMode from "../darkmode/DarkMode";
import { ThemeContext } from "../../hooks/ThemeContext";
import logo from './logo192.png';

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  const navLinkStyles = ({ isActive }) => {
    if (theme === "light") {
      return { color: isActive ? "rgb(196, 164, 84)" : "black" };
    } else {
      return { color: isActive ? "rgb(196, 164, 84)" : "white" };
    }
  };

  return (
    <nav className={`${theme}`}>
      <div className="logo-container">
        <img class="logo" src={logo} alt="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={navLinkStyles}
            className={`nav-link`}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={navLinkStyles}
            className={`nav-link`}
            to="/cart"
          >
            <i className={`fa-solid fa-cart-shopping`}></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <DarkMode className="NavLink" />
        </li>
        {/* <li>
                <Link to="/products/:id">Home</Link>
            </li> */}
      </ul>
    </nav>
  );
}
