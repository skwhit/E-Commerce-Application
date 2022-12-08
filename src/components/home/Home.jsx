import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-container">
        <h1>New Arrivals for the Holiday Season</h1>
        <Link to="/products"><button className="get-started">Take a Look</button></Link>
    </div>
  )
}
