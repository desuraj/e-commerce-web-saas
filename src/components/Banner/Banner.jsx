import React from 'react'
import './Banner.css'
import CONFIG from '../../config'

export default function Banner() {
  const { title, subtitle, buttonText, backgroundImage } = CONFIG.banner

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${CONFIG.banner.backgroundImage})` }}
    >
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && (
          <a href="#products-section" className="shop-btn">
            {buttonText}
          </a>
        )}
      </div>
    </section>
  )
}
