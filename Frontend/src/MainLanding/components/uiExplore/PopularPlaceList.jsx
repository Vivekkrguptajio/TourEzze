// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Mousewheel } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/mousewheel";   /* optional if there is a CSS for it */

// // Register modules (v10+)
// // SwiperCore.use([Navigation, Mousewheel]);

// import PopularPlaceCard from "./PopularPlaceCard";
// import { placesData } from "./placesData";

// export default function PopularPlaceList() {
//   return (
//    <Swiper
//   modules={[Navigation, Mousewheel]}
//   spaceBetween={20}
//   slidesPerView={5}
//   navigation
//   mousewheel={true}
//   breakpoints={{
//     320: { slidesPerView: 1 },
//     480: { slidesPerView: 2 },
//     768: { slidesPerView: 3 },
//     1024: { slidesPerView: 5 },
//   }}
// >
//   {placesData.map(place => (
//     <SwiperSlide key={place.id}>
//       <PopularPlaceCard place={place} />
//     </SwiperSlide>
//   ))}
// </Swiper>

//   );
// }




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
      slidesPerView={5}
      navigation
      mousewheel={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
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
