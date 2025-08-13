import React from 'react'
import './ProductCard.css'
import CONFIG from '../../config'

export default function ProductCard({ product, onViewDetails }) {
  return (
    <div className="product-card" onClick={() => onViewDetails(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{CONFIG.currency.symbol}{product.price}/kg</p>
      <div className="cta">View Details</div>
    </div>
  )
}
