import React, { useRef } from "react";
import Navbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import Explore from "./components/Explore";
import WhyChooseUs from "./components/WhyChoose";
import CultureSection from "./components/CultureSection";
import RoleSelector from "./components/RoleSelector";
import Events from "./components/Events";
import  Product  from "./components/Product";
import Footer from "./components/Footer";

export default function MainLanding() {
  const exploreRef = useRef(null);
  const roleRef = useRef(null);
  const eventsRef = useRef(null);
  const marketplaceRef = useRef(null); // ⭐ NEW

  return (
    <div>
      <Navbar 
        exploreRef={exploreRef} 
        roleRef={roleRef} 
        eventsRef={eventsRef}
        marketplaceRef={marketplaceRef} // ⭐ Send to navbar
      />

      <HeroSection />
      <CultureSection />
     

      {/* EXPLORE SECTION */}
      <div ref={exploreRef}>
        <Explore />
      </div>

      {/* EVENTS SECTION */}
      <div ref={eventsRef}>
        <Events />
      </div>

      {/* MARKETPLACE SECTION */}
      <div ref={marketplaceRef}>
        <Product />
      </div>

      {/* ROLE SECTION */}
      <div ref={roleRef}>
        <RoleSelector />
      </div>
       <WhyChooseUs />
      <Footer/>
    </div>
  );
}
