import React, { useState } from 'react'
import './ProductDetails.css'
import CONFIG from '../../config'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import Button from '../Button/Button'

export default function ProductDetails({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  if (!product) return null

  const handleBuyNow = () => {
    if (!CONFIG.features.enableBuyNow) return
    const message = CONFIG.buyNowMessageTemplate(product, quantity)
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✖</button>
        <div className="grid">
          <img src={product.image} alt={product.name} />
          <div className="info">
            <h2>{product.name}</h2>
            <p className="price">{CONFIG.currency.symbol}{product.price}/kg</p>
            <ul className="specs">
              {Object.entries(product.details || {}).map(([k, v]) => (
                <li key={k}><strong>{k}:</strong> {v}</li>
              ))}
            </ul>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <Button onClick={handleBuyNow}>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
