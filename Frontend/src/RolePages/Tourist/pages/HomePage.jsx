import { useState } from "react";
import FeaturedDestinations from "../componentsLandingPage/FeaturedDestinations.jsx";
import Navbar from "../componentsLandingPage/TouistNavbar.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/FeatureDestinations.css";
import EventSection from "../componentsLandingPage/EventSection.jsx";
import LoginModal from "../componentsLandingPage/auth/LoginModal.jsx";
import SignupModal from "../componentsLandingPage/auth/SignupModal.jsx";

export default function LandingPage() {

  // ⭐ Ye missing tha — isliye error aa raha tha
  const [authType, setAuthType] = useState("");


  return (
    <>
      <Navbar setAuthType={setAuthType} />

      <FeaturedDestinations />
      <EventSection />

      {/* MODALS */}
      {authType === "login" && (
        <LoginModal close={() => setAuthType("")} />
      )}
      {authType === "signup" && (
        <SignupModal close={() => setAuthType("")} />
      )}
    </>
  );
}
