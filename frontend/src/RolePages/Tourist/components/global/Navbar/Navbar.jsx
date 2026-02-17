import { useState, useEffect } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar({ setAuthType }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) return;

    try {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
    } catch {
      localStorage.removeItem("user");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
  { to: "/role/tourist", label: "Explore" },
  { to: "/role/tourist/ai-itinerary", label: "Plan" },
  { to: "/role/tourist/hotels", label: "Hotels" },

  // ⭐ Add this NEW line
  { to: "/role/tourist/packages", label: "Packages" },

  { to: "/role/tourist/shop", label: "Shop" },
  { to: "/role/tourist/events", label: "Events" }
];


  return (
    <>
      <nav className="bg-green-900 fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo onClick={() => setMobileMenuOpen(false)} />

            <DesktopMenu
              navLinks={navLinks}
              isLoggedIn={isLoggedIn}
              user={user}
              setAuthType={setAuthType}
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-green-800 rounded-lg z-50"
            >
              {mobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        <MobileMenu
          navLinks={navLinks}
          user={user}
          isLoggedIn={isLoggedIn}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setAuthType={setAuthType}
        />
      </nav>

      <div className="h-16" />
    </>
  );
}
