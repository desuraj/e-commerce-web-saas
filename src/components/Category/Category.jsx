import React, { useEffect, useState } from "react";
import "./Category.css";
import products from "../../data/products.json"; // Will replace with API later

export default function Category({ onCategorySelect }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Extract unique Type values from products.json
        const uniqueTypes = [...new Set(products.map((p) => p.Type))];
        // Add "All" at start
        setCategories(["All", ...uniqueTypes]);
    }, []);

    return (
        <div className="category-container">
            {categories.map((cat, idx) => (
                <div
                    className="category-item"
                    key={idx}
                    onClick={() => onCategorySelect(cat)}
                >
                    {/* Placeholder icon for now — in future, we can map Type to an actual image */}
                    <img
                        src={`https://via.placeholder.com/80?text=${encodeURIComponent(
                            cat
                        )}`}
                        alt={cat}
                    />
                    <span>{cat}</span>
                </div>
            ))}
        </div>
    );
}
