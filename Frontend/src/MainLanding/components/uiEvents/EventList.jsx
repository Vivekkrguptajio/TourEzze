import React, { useRef } from "react";
import EventCard from "./EventCard.jsx";
import { eventsData } from "../uiEvents/eventsData.js";
import "../../styles/Explore.css";

export default function EventList() {
  const sliderRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY * 1.1;
  };

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

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

      {/* SCROLL AREA */}
      <div ref={sliderRef} onWheel={handleWheel} className="slider-container">
        {eventsData.map((event) => (
          <div key={event.id} className="slider-item">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
