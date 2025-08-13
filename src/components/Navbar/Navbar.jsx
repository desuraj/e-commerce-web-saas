import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CONFIG from '../../config'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={CONFIG.logo} alt={CONFIG.siteName} />
        <span>{CONFIG.siteName}</span>
      </Link>
      <nav className="navlinks">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      {CONFIG.features.enableCart && <div className="cart">🛒</div>}
    </header>
  )
}
