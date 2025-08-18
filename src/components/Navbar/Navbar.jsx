import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CONFIG from '../../config'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={CONFIG.logo} alt={CONFIG.siteName} />
        <span>{CONFIG.siteName}</span>
      </Link>

      {/* Close button (mobile only) */}
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
      {CONFIG.features.enableCart && <div className="cart">🛒</div>}
    </header>
  )
}
