import React, { useState } from 'react'
import products from '../../data/products.json'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import './Products.css'

export default function Products() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="products">
      <h1>All Products</h1>
      <div className="grid">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} onViewDetails={setSelected} />
        ))}
      </div>
      {selected && <ProductDetails product={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
