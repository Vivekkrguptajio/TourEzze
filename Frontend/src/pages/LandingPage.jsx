import FeaturedDestinations from "../componentsLandingPage/FeaturedDestinations.jsx";
import HeroSlider from "../componentsLandingPage/HeroSection.jsx";
import Navbar from "../componentsLandingPage/Navbar.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/FeatureDestinations.css";

import EventSection from "../componentsLandingPage/EventSection.jsx";
import WhyChooseUs from "../componentsLandingPage/WhyChoose.jsx";


export default function LandingPage() {
  return (
    <>
     
      <HeroSlider />
      <FeaturedDestinations />
      <EventSection />
      <WhyChooseUs />
      
    </>
  );
}
