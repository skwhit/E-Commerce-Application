import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Navbar.css";
import DarkMode from "../darkmode/DarkMode";
import { ThemeContext } from "../../Context/ThemeContext";
import logo from "./logo192.png";
import { useCart } from "../../Context/Context";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { state } = useCart();
  const navigate = useNavigate();

  const navLinkStyles = ({ isActive }) => {
    if (theme === "light") {
      return { color: isActive ? "rgb(196, 164, 84)" : "black" };
    } else {
      return { color: isActive ? "rgb(196, 164, 84)" : "white" };
    }
  };

  const cartQuantity = () => {
    let quantity = 0;
    state.forEach((item) => {
      quantity += Number(item.quantity);
    });
    return quantity;
  };

  return (
    <nav className={`${theme}`}>
      <div onClick={() => navigate("/")} className="logo-container">
        <img class="logo" src={logo} alt="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navLinkStyles} className={`nav-link`} to="/products">
            Products
          </NavLink>
        </li>

        <li className="nav-item cart">
          <NavLink
            style={navLinkStyles}
            className={`nav-link nav-cart`}
            to="/cart"
          >
            <i className={`fa-solid fa-cart-shopping nav-cart`}></i>
            {state.length ? (
              <p className="nav-cart-quantity">{cartQuantity()}</p>
            ) : (
              <></>
            )}
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
