import React from "react";
import loadingGif from "./loading-gif.gif";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <h1>Loading...</h1>
      <img src={loadingGif} alt="" />
    </div>
  );
}
