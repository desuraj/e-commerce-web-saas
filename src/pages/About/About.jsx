import React from 'react'
import './About.css'
import CONFIG from '../../config'

export default function About() {
  return (
    <div className="about">
      <h1>About {CONFIG.siteName}</h1>
      <p>{CONFIG.siteName} is committed to delivering pure, authentic spices with uncompromised quality.</p>
      <p>We source directly from farmers and ensure rigorous quality checks before packaging.</p>
    </div>
  )
}
