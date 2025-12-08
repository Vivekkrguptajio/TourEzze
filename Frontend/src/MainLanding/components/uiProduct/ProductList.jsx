// ProductList.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";  

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { marketplaceProducts } from "./productData";

export default function ProductList() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Mousewheel]}  
        navigation
        mousewheel
        spaceBetween={15}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {marketplaceProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}