import React from "react";
import EventCard from "./EventCard.jsx";
import { eventsData } from "./eventsData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function EventList() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={15}       // gap between cards
        slidesPerView={5}       // show minimum 5 cards
        navigation={true}       // arrows
        mousewheel={true}       // scroll with wheel / touchpad
        breakpoints={{          // responsive
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {eventsData.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
