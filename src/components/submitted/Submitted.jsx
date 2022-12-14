import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import "./Submitted.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Submitted() {
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    timer === 0 && navigate("/");
  }, [timer]);

  return (
    <div className={`submitted-container ${theme}`}>
      <h1>
        Thank you for your purchase. <br />
        Please check your email for an order confirmation.
      </h1>
      <h3>
        You will redirected back to the home page in{" "}
        <p className="submitted-timer">{timer}</p> seconds
      </h3>
    </div>
  );
}
