import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import Navbar from "./componentsLandingPage/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </>
  );
}
