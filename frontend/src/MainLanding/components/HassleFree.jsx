import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { servicesData } from "./uiServices/servicesData";
import "../styles/HassleFree.css";

export default function HassleFree() {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="hassle-free-section">
      <div className="hassle-free-container">
        <h2 className="hassle-free-title">Enjoy a hassle-free Jharkhand holiday</h2>

        <div className="hassle-free-carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="hf-card">
                  <div className="hf-icon-circle">{service.icon}</div>
                  <h3 className="hf-card-title">{service.title}</h3>
                  <p className="hf-card-desc">{service.desc}</p>
                  <div className="hf-card-arrow">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hf-bottom-controls">
          <div className="hf-left-controls">
            <button className="hf-view-all-btn" onClick={() => navigate('/services')}>
              View all services <ChevronRight size={18} />
            </button>
            <div className="hf-nav-buttons">
              <button onClick={() => swiperRef.current?.slidePrev()} className="hf-nav-btn"><ChevronLeft size={20} /></button>
              <button onClick={() => swiperRef.current?.slideNext()} className="hf-nav-btn"><ChevronRight size={20} /></button>
            </div>
          </div>
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
