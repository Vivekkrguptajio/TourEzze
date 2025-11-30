import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Tourist/components/global/TouistNavbar.jsx";
import LoginModal from "../Tourist/components/global/auth/LoginModal.jsx";
import SignupModal from "../Tourist/components/global/auth/SignupModal.jsx";


import ExplorePage from "./components/Explore/pages/ExplorePage.jsx";
import { Plane } from "lucide-react";
import Plan from "./components/Plan/Plan.jsx";
import EventsPage from "./components/events/pages/EventsPage.jsx";
import MarketplacePage from "./components/Shop/pages/MarketplacePage.jsx";
import HotelsPage from "./components/Hotels/pages/HotelsPage.jsx";


export default function Tourist() {
  const [authType, setAuthType] = useState(null);

  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar setAuthType={setAuthType} />

      {/* LOGIN / SIGNUP POPUP */}
      {authType === "login" && <LoginModal close={() => setAuthType(null)} />}
      {authType === "signup" && <SignupModal close={() => setAuthType(null)} />}

      {/* Nested Content */}
      <div className="pt-14">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/explore" element={<ExplorePage/>} />
           <Route path="/ai-itinerary" element={<Plan/>} />
           <Route path="/events" element={<EventsPage/>} />
           <Route path="/shop" element={<MarketplacePage/>} />
           <Route path="/hotels" element={<HotelsPage/>} />
        </Routes>
      </div>
    </>
  );
}
