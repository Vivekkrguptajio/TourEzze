import { Routes, Route } from "react-router-dom";

import ChatbotButton from "./componenets/ChatbotButton";
import EmergencyWidget from "./componenets/EmergencyWidget";
import MainLanding from "./MainLanding/MainLanding";

// Role Pages
import TouristPortal from "./RolePages/Tourist/TouristPortal";
import VendorPortal from "./RolePages/Vendor/VendorPortal";
import GuidePortal from "./RolePages/Guide/GuidePortal";
import HotelPortal from "./RolePages/Hotel/HotelPortal";
import GovPortal from "./RolePages/Admin/GovPortal";

export default function App() {
  return (
    <>
      {/* Floating Buttons (always visible) */}
      <ChatbotButton />
      <EmergencyWidget />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<MainLanding />} />

        <Route path="/role/tourist/*" element={<TouristPortal />} />
        <Route path="/role/vendor/*" element={<VendorPortal />} />
        <Route path="/role/guide/*" element={<GuidePortal />} />
        <Route path="/role/hotel-owner/*" element={<HotelPortal />} />
        <Route path="/role/government" element={<GovPortal />} />
      </Routes>
    </>
  );
}
