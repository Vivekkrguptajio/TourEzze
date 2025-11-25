import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";

import Navbar from "./componentsLandingPage/TouistNavbar";
import AuthModal from "./componentsLandingPage/modals/AuthModal";
import Footer from "./componentsLandingPage/Footer";
import AIPlanner from "./pages/AIPlanner";
import EventsPage from "./pages/EventsPage";
import MarketplacePage from "./pages/MarketplacePage";

export default function Tourist() {
  // Login/Signup modal control
  const [authType, setAuthType] = useState(null);
  // null | "login" | "signup"

  return (
    <>
      {/* Navbar me popup trigger bhejna zaruri */}
      <Navbar setAuthType={setAuthType} />

      {/* GLOBAL POPUP MODAL */}
      <AuthModal authType={authType} setAuthType={setAuthType} />

      {/* Page Body */}
      <div className="pt-14">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/ai-itinerary" element={<AIPlanner />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
