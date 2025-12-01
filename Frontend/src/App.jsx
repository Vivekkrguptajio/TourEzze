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

// AUTH (Vendor + Guide + Hotel)
import VendorLogin from "./RolePages/Vendor/Auth/VendorLogin";
import GuideLogin from "./RolePages/Guide/Auth/GuideLogin";
import HotelAuth from "./RolePages/Hotel/Auth/HotelAuth";

import VendorLogout from "./RolePages/Vendor/Auth/VendorLogout";
import GuideLogout from "./RolePages/Guide/Auth/GuideLogout";
import HotelLogout from "./RolePages/Hotel/Auth/HotelLogout";

import ProtectedRoute from "./RolePages/Vendor/Auth/ProtectedRoute";
import GuideProtectedRoute from "./RolePages/Guide/Auth/GuideProtectedRoute";
import HotelProtectedRoute from "./RolePages/Hotel/Auth/HotelProtectedRoute";

import GovLogin from "./RolePages/Admin/Auth/GovLogin";
import GovLogout from "./RolePages/Admin/Auth/GovLogout";
import GovProtectedRoute from "./RolePages/Admin/Auth/GovProtectedRoute";

export default function App() {
  return (
    <>
      <ChatbotButton />
      <EmergencyWidget />

      <Routes>
        <Route path="/" element={<MainLanding />} />

        {/* ====================== TOURIST ====================== */}
        <Route path="/role/tourist/*" element={<TouristPortal />} />

        {/* ====================== VENDOR ====================== */}
        <Route path="/role/vendor/login" element={<VendorLogin />} />
        <Route path="/role/vendor/logout" element={<VendorLogout />} />

        <Route
          path="/role/vendor/*"
          element={
            <ProtectedRoute>
              <VendorPortal />
            </ProtectedRoute>
          }
        />

        {/* ====================== GUIDE ======================= */}
        <Route path="/role/guide/login" element={<GuideLogin />} />
        <Route path="/role/guide/logout" element={<GuideLogout />} />

        <Route
          path="/role/guide/*"
          element={
            <GuideProtectedRoute>
              <GuidePortal />
            </GuideProtectedRoute>
          }
        />

        {/* ====================== HOTEL (FIXED FULL AUTH) ======================= */}

        {/* LOGIN + SIGNUP PAGE */}
        <Route path="/role/hotel-owner/login" element={<HotelAuth />} />

        {/* LOGOUT */}
        <Route path="/role/hotel-owner/logout" element={<HotelLogout />} />

        {/* PROTECTED PORTAL */}
        <Route
          path="/role/hotel-owner/*"
          element={
            <HotelProtectedRoute>
              <HotelPortal />
            </HotelProtectedRoute>
          }
        />

        {/* ====================== GOVERNMENT AUTH ====================== */}

        <Route path="/role/government/login" element={<GovLogin />} />
        <Route path="/role/government/logout" element={<GovLogout />} />

        <Route
          path="/role/government/*"
          element={
            <GovProtectedRoute>
              <GovPortal />
            </GovProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
