import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { applyTheme } from './themeLoader'
import CONFIG from './config'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

import Home from './pages/Home/Home.jsx'
import Products from './pages/Products/Products.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'

export default function App() {
  useEffect(() => {
    applyTheme()
    document.title = CONFIG.siteName
  }, [])

  return (
    <Router>
      <Navbar />
      <main className="container">
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
  
            {/* Redirect any unknown route to Home */}
            <Route path="*" element={<Home />} />
            </Routes>

      </main>
      <Footer />
    </Router>
  )
}
