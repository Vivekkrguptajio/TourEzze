// EventList.jsx
import React, { useRef, useEffect } from "react";
import EventCard from "./EventCard.jsx";
import { eventsData } from "./eventsData.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/EventScroll.css"; // New CSS file

export default function EventList() {
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
    <div className="event-slider-wrapper">
      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="event-arrow event-arrow-left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="event-arrow event-arrow-right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* HORIZONTAL SCROLL LIST */}
      <div
        ref={sliderRef}
        className="event-slider-container"
      >
        {eventsData.map((event) => (
          <div key={event.id} className="event-slider-item">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}