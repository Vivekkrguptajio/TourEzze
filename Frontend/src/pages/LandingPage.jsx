import FeaturedDestinations from '../components/FeaturedDestinations.jsx'
import HeroSlider from '../components/HeroSection.jsx'
import  Navbar  from '../components/Navbar.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/FeatureDestinations.css";

import EventSection from '../components/EventSection.jsx';
import WhyChooseUs from '../components/WhyChoose.jsx';
import Footer from '../components/Footer.jsx';
import ChatbotButton from '../components/ChatbotButton.jsx';

export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <HeroSlider/>
    <FeaturedDestinations/>
    <EventSection/>
    <WhyChooseUs/>
    <Footer/>
    <ChatbotButton/>
    </>
  )
}
