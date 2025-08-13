import React, { useState } from 'react'
import products from '../../data/products.json'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import Banner from '../../components/Banner/Banner'
import './Home.css'

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="home">
      {/* Reusable hero/banner */}
      <Banner />

      {/* Products section */}
      <h2 id="products-section">Featured Products</h2>
      <div className="grid">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} onViewDetails={setSelected} />
        ))}
      </div>

      {/* Product details modal */}
      {selected && <ProductDetails product={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
