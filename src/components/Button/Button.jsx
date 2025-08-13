import React from 'react'
import './Button.css'

export default function Button({ children, onClick, type='button' }) {
  return (
    <button type={type} className="btn" onClick={onClick}>{children}</button>
  )
}
