// ProductList.jsx
import React, { useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import { marketplaceProducts } from "./productData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/ProductScroll.css"; // New CSS file

export default function ProductList() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      slider.scrollLeft += e.deltaY * 1.1;
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="product-slider-wrapper">
      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="product-arrow product-arrow-left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="product-arrow product-arrow-right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* HORIZONTAL SCROLL LIST */}
      <div
        ref={sliderRef}
        className="product-slider-container"
      >
        {marketplaceProducts.map((item) => (
          <div key={item.id} className="product-slider-item">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}