import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Tourist/components/global/TouistNavbar.jsx";
import LoginModal from "../Tourist/components/global/auth/LoginModal.jsx";
import SignupModal from "../Tourist/components/global/auth/SignupModal.jsx";

import HomePage from "../Tourist/pages/HomePage.jsx";
import ExplorePage from "../Tourist/pages/ExplorePage.jsx";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
    </>
  );
}
