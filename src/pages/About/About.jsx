import React from 'react'
import './About.css'
import CONFIG from '../../config'

export default function About() {
  return (
    <div className="about">
      <h1>About {CONFIG.siteName}</h1>
      <p>{CONFIG.siteName} We are committed to offering stylish, comfortable, and high-quality ready-made clothes.</p>
      <p>Our collections are carefully selected to bring you the latest trends with superior fabric and perfect stitching.</p>
    </div>
  )
}
