import React from 'react'
import './QuantitySelector.css'

export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="qty">
      <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(q => q + 1)}>+</button>
    </div>
  )
}
