
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import modules from the correct path
import { Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PopularPlaceCard from "./PopularPlaceCard";
import { placesData } from "./placesData";

export default function PopularPlaceList() {
  return (
    <Swiper
      modules={[Navigation, Mousewheel]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      mousewheel={true}
      breakpoints={{
        320: { slidesPerView: 1 },
      
      }}
    >
      {placesData.map((place) => (
        <SwiperSlide key={place.id}>
          <PopularPlaceCard place={place} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
