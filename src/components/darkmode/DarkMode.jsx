import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./DarkMode.css";

export default function DarkMode() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleMode = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div onClick={handleMode} className="nav-link mode">
      {theme === "light" ? (
        <i className="fa-solid fa-sun sun"></i>
      ) : (
        <i className="fa-solid fa-moon moon"></i>
      )}
    </div>
  );
}
