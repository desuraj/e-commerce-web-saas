import React, { useState } from 'react'
import './Contact.css'
import CONFIG from '../../config'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const text = `Hello, I'm ${name}.\n${message}`
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={submit} className="contact-form">
        <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required/>
        <textarea placeholder="Message" rows="5" value={message} onChange={e=>setMessage(e.target.value)} required/>
        <button type="submit">Send on WhatsApp</button>
      </form>
      <p>Email: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
      <p>Address: {CONFIG.address}</p>
    </div>
  )
}
