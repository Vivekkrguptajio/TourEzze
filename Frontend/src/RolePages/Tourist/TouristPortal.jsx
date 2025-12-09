import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Tourist/components/global/TouistNavbar.jsx";
import LoginModal from "../Tourist/components/global/auth/LoginModal.jsx";
import SignupModal from "../Tourist/components/global/auth/SignupModal.jsx";
import Footer from "../Tourist/components/global/Footer.jsx";

import TourCart from "./components/global/TourCart.jsx";
import ExplorePage from "./components/Explore/pages/ExplorePage.jsx";
import Plan from "./components/Plan/Plan.jsx";
import EventsPage from "./components/events/pages/EventsPage.jsx";
import MarketplacePage from "./components/Shop/pages/MarketplacePage.jsx";
import HotelsPage from "./components/Hotels/pages/HotelsPage.jsx";
import PaymentPage from "./components/packages/PaymentPage.jsx";

export default function Tourist() {
  const [authType, setAuthType] = useState(null);

  return (
    <>
      {/* NAVBAR */}
      <Navbar setAuthType={setAuthType} />

      {/* LOGIN / SIGNUP */}
      {authType === "login" && <LoginModal close={() => setAuthType(null)} />}
      {authType === "signup" && <SignupModal close={() => setAuthType(null)} />}

      {/* ROUTES */}
      <div className="pt-14 min-h-screen">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/ai-itinerary" element={<Plan />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/shop" element={<MarketplacePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/cart" element={<TourCart />} />
           <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
