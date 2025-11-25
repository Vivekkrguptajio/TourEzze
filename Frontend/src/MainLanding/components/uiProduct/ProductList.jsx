import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { marketplaceProducts } from "./productData";
import "../../styles/Explore.css"; // SAME CSS USE HOGA

export default function ProductList() {
  const sliderRef = useRef(null);

  // Wheel Scroll
  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY * 1.1;
  };

  // Arrow Left
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  // Arrow Right
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <div className="relative">
      
      {/* LEFT ARROW */}
      <div className="slider-arrow left" onClick={scrollLeft}>
        ❮
      </div>

      {/* RIGHT ARROW */}
      <div className="slider-arrow right" onClick={scrollRight}>
        ❯
      </div>

      {/* HORIZONTAL SCROLL LIST */}
      <div
        ref={sliderRef}
        onWheel={handleWheel}
        className="slider-container"
      >
        {marketplaceProducts.map((item) => (
          <div key={item.id} className="slider-item">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
