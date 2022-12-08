import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-container">
        <h1>We have what you need</h1>
        <Link to="/products"><button className="get-started">Get started</button></Link>
    </div>
  )
}
