import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  memo,
} from "react";
import "./Category.css";
import products from "../../data/products.json";

// ✅ Memoized CategoryItem so only clicked/active changes re-render
const CategoryItem = memo(
  function CategoryItem({ cat, isActive, onSelect, getIcon, setLabelRef }) {
    return (
      <div
        className={`category-item ${isActive ? "active" : ""}`}
        onClick={() => onSelect(cat)}
      >
        <img
          src={getIcon(cat)}
          alt={cat}
          className="category-icon"
          onError={(e) => {
            e.currentTarget.src = `${import.meta.env.BASE_URL}images/all.jpg`;
          }}
        />
        <span ref={setLabelRef(cat)} className="category-label">
          {cat}
        </span>
      </div>
    );
  },
  (prev, next) => prev.cat === next.cat && prev.isActive === next.isActive
);

export default function Category({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");

  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const labelRefs = useRef({});

  useEffect(() => {
    const uniqueTypes = [...new Set(products.map((p) => p.Type))];
    setCategories(["All", ...uniqueTypes]);
  }, []);

  const handleSelect = (cat) => {
    setSelected(cat);
    onCategorySelect?.(cat);
  };

  const getIcon = (cat) => {
    const key = String(cat).trim().toLowerCase();
    return `${import.meta.env.BASE_URL}images/${key}.jpg`;
  };

  // helper to set refs for labels
  const setLabelRef = (cat) => (el) => {
    if (el) labelRefs.current[cat] = el;
  };

  // update underline indicator position
  const updateIndicator = () => {
    cancelAnimationFrame(updateIndicator.raf);
    updateIndicator.raf = requestAnimationFrame(() => {
      const container = containerRef.current;
      const indicator = indicatorRef.current;
      const labelEl = labelRefs.current[selected];
      if (!container || !indicator || !labelEl) return;

      const cRect = container.getBoundingClientRect();
      const lRect = labelEl.getBoundingClientRect();

      const left = lRect.left - cRect.left + container.scrollLeft;
      const width = lRect.width;

      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.width = `${width}px`;
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [selected, categories]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="category-wrap">
      <div className="category-container" ref={containerRef}>
        {categories.map((cat) => (
          <CategoryItem
            key={cat}
            cat={cat}
            isActive={selected === cat}
            onSelect={handleSelect}
            getIcon={getIcon}
            setLabelRef={setLabelRef}
          />
        ))}

        {/* underline bar */}
        <div className="category-indicator" ref={indicatorRef} />
      </div>
    </div>
  );
}
