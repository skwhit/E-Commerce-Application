import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [light, setLight] = useState(true);

  const handleMode = () => {
    setLight((light) => !light);
  };

  return (
    <nav>
      <div className="logo-container">
        <img class="logo" src="./logo.png" alt="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
        <li className="nav-item">
          <div onClick={handleMode} className="nav-link mode">
            {light ? (
              <i class="fa-solid fa-sun"></i>
            ) : (
              <i class="fa-solid fa-moon"></i>
            )}
          </div>
        </li>
        {/* <li>
                <Link to="/products/:id">Home</Link>
            </li> */}
      </ul>
    </nav>
  );
}
