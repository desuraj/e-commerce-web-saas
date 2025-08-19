import React from "react";
import "./ProductCard.css";
import CONFIG from "../../config";

export default function ProductCard({ product, onViewDetails }) {
  return (
    <div className="product-card" onClick={() => onViewDetails(product)}>
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {CONFIG.currency.symbol}
          {product.price}
          /kg
        </p>
      </div>

      <div className="product-cta">View Details</div>
    </div>
  );
}
