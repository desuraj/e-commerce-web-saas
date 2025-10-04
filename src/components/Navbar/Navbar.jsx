import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CONFIG from '../../config'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)

  // compute navbar height CSS var
  useEffect(() => {
    function setNavHeight() {
      const h = headerRef.current?.getBoundingClientRect().height || 0
      document.documentElement.style.setProperty('--navbar-height', `${Math.round(h)}px`)
    }
    setNavHeight()
    window.addEventListener('resize', setNavHeight)
    window.addEventListener('orientationchange', setNavHeight)
    return () => {
      window.removeEventListener('resize', setNavHeight)
      window.removeEventListener('orientationchange', setNavHeight)
      document.documentElement.style.removeProperty('--navbar-height')
    }
  }, [])

  // lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ESC to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  /* ---------- IMPORTANT ----------
     Use 'right' animation here to avoid any transform overrides elsewhere.
     We animate: right (-100vw -> 0) and opacity (0 -> 1).
  */
  const mobileStyle = {
    right: menuOpen ? '0' : '-100vw',
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? 'auto' : 'none',
    transition: 'right 420ms cubic-bezier(.22,.9,.34,1), opacity 320ms ease'
  }

  return (
    <header className="navbar" ref={headerRef} role="banner">
      {/* MENU ICON (left) — shown only when closed */}
      {!menuOpen && (
        <button
          className="menu-toggle"
          aria-controls="mobileMenu"
          aria-expanded={menuOpen}
          aria-label="Open menu"
          onClick={openMenu}
        >
          ☰
        </button>
      )}

      {/* Brand */}
      <Link to="/" className="brand" aria-label={CONFIG.siteName}>
        <img src={CONFIG.logo} alt={CONFIG.siteName} />
        <span>{CONFIG.siteName}</span>
      </Link>

      {/* Desktop nav */}
      <nav className="navlinks desktop" role="navigation" aria-label="Primary">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
      </nav>

      {/* Cart */}
      {CONFIG.features?.enableCart && <div className="cart">🛒</div>}

      {/* CLOSE ICON on navbar right when open */}
      {menuOpen && (
        <button
          className="close-toggle"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✖
        </button>
      )}

      {/* Mobile panel — inline styles animate 'right' and 'opacity' */}
      <nav
        id="mobileMenu"
        className={`navlinks mobile ${menuOpen ? 'open' : ''}`}
        role="navigation"
        aria-hidden={!menuOpen}
        aria-label="Mobile"
        style={mobileStyle}
      >
        <NavLink to="/" end onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/products" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
      </nav>

      {/* overlay below navbar */}
      <div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
    </header>
  )
}
