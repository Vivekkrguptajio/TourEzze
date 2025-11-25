import React, { useRef } from "react";
import PopularPlaceCard from "./PopularPlaceCard";
import { placesData } from "../../../MainLanding/components/uiExplore/placesData";
import "../styles/FeatureDestinations.css";

export default function PopularPlaceList() {
  const sliderRef = useRef(null);

  // MOUSE WHEEL -> Horizontal scrolling
  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY * 1.2; // faster scroll
  };

  // LEFT ARROW
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  // RIGHT ARROW
  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      <div className="slider-arrow left" onClick={scrollLeft}>
        ◀
      </div>

      {/* RIGHT ARROW */}
      <div className="slider-arrow right" onClick={scrollRight}>
        ▶
      </div>

      {/* SCROLLER */}
      <div ref={sliderRef} onWheel={handleWheel} className="slider-container">
        {placesData.map((place) => (
          <div key={place.id} className="slider-item">
            <PopularPlaceCard place={place} />
          </div>
        ))}
      </div>
    </div>
  );
}
