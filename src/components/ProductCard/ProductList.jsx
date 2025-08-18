import React from "react";
import ProductCard from "./ProductCard"; // adjust path if needed
import "./ProductCard.css"; // so grid styles apply

export default function ProductList({ products, onViewDetails }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
