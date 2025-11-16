import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";

import Navbar from "./componentsLandingPage/Navbar";
import AuthModal from "./componentsLandingPage/modals/AuthModal";
import Footer from "./componentsLandingPage/Footer";
import ChatbotButton from "./componentsLandingPage/ChatbotButton";

export default function App() {
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
        </Routes>
      </div>

      <Footer/>
      <ChatbotButton/>
    </>
  );
}
