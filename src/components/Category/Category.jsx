import React, { useEffect, useState } from "react";
import "./Category.css";
import products from "../../data/products.json";
import categoryImages from "../../data/categoryImages";

export default function Category({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");  // 🔹 track selected category

  useEffect(() => {
    const uniqueTypes = [...new Set(products.map((p) => p.Type))];
    setCategories(["All", ...uniqueTypes]);
  }, []);

  const handleSelect = (cat) => {
    setSelected(cat);
    setTimeout(() => setClicked(null), 150);  // 150ms baad reset
  setSelected(cat);
    onCategorySelect(cat);
  };
  

  return (
    <div className="category-container">
      {categories.map((cat, idx) => (
        <div
          className={`category-item ${selected === cat ? "active" : ""}`}  // 🔹 add active class
          key={idx}
          onClick={() => handleSelect(cat)}
        >
          <img
            src={categoryImages[cat] || categoryImages["All"]} 
            alt={cat}
            className="category-icon"
          />
          <span>{cat}</span>
        </div>
      ))}
    </div>
  );
}

