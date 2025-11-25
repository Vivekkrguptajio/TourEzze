import { useState } from "react";
import Navbar from "../TouistNavbar";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";

export default function App() {
  const [authType, setAuthType] = useState("");

  return (
    <>
      <Navbar setAuthType={setAuthType} />

      {authType === "login" && (
        <LoginModal close={() => setAuthType("")} />
      )}

      {authType === "signup" && (
        <SignupModal close={() => setAuthType("")} />
      )}
    </>
  );
}
