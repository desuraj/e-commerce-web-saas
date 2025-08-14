import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import './Home.css';

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Filter products by category
  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.Type === category));
    }
  };

  // Reset filter on first load
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="home">
      {/* Reusable hero/banner */}
      <Banner />

      {/* Category section */}
      <Category onCategorySelect={handleCategorySelect} />

      {/* Products section */}
      <h2 id="products-section">Featured Products</h2>
      <div className="grid">
        {filteredProducts.map((p, i) => (
          <ProductCard key={i} product={p} onViewDetails={setSelected} />
        ))}
      </div>

      {/* Product details modal */}
      {selected && (
        <ProductDetails
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
