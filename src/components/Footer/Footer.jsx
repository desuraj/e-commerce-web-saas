import React from 'react'
import CONFIG from '../../config'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="cols">
        <div>
          <div className="brandline">
            <img src={CONFIG.logo} alt={CONFIG.siteName} />
            <strong>{CONFIG.siteName}</strong>
          </div>
          <p>{CONFIG.tagline}</p>
          <p>{CONFIG.address}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
          <p>WhatsApp: <a href={`https://wa.me/${CONFIG.whatsappNumber}`} target="_blank">{CONFIG.whatsappNumber}</a></p>
        </div>
        <div>
          <h4>Follow</h4>
          <div className="socials">
            <a href={CONFIG.socialLinks.facebook}>Facebook</a>
            <a href={CONFIG.socialLinks.instagram}>Instagram</a>
            <a href={CONFIG.socialLinks.twitter}>Twitter</a>
            <a href={CONFIG.socialLinks.youtube}>YouTube</a>
          </div>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {CONFIG.siteName}</div>
    </footer>
  )
}
