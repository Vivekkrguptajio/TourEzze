import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

export default function MainNavbar({ exploreRef, roleRef, eventsRef, marketplaceRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);

  const alertRef = useRef(null);

  // Sample tourist alerts
  const alerts = [
    "🌧️ Weather Alert: Heavy rain expected in Netarhat.",
    "⚠️ Hundru Falls water level very high. Avoid visiting.",
    "🚧 Traffic Jam: Ranchi → Patratu route slow.",
    "🔥 Forest Entry Restricted: Betla area closed today.",
    "🎉 Festival Rush: High crowd near Pahari Mandir."
  ];

  // Handle scroll shrink
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close alert dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (alertRef.current && !alertRef.current.contains(e.target)) {
        setShowAlerts(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    const yOffset = -85;
    const yPosition =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[999] transition-all duration-300
        ${isScrolled ? "py-2 bg-green-900 shadow-lg" : "py-4 bg-green-900 shadow-md"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h1
            className={`font-bold text-white transition-all 
              ${isScrolled ? "text-lg" : "text-2xl"}
            `}
          >
            TourEzze
          </h1>
          <span
            className={`text-white transition-all 
              ${isScrolled ? "text-xl" : "text-3xl"}
            `}
          >
            .
          </span>
        </div>

        {/* MENU ITEMS */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <p className="hover:text-green-300 cursor-pointer" onClick={() => scrollToSection(exploreRef)}>
            Explore
          </p>

          <p className="hover:text-green-300 cursor-pointer" onClick={() => scrollToSection(eventsRef)}>
            Events
          </p>

          <p className="hover:text-green-300 cursor-pointer" onClick={() => scrollToSection(marketplaceRef)}>
            Marketplace
          </p>

          <Link to="/ar-vr" className="hover:text-green-300 transition">
            AR/VR
          </Link>

          {/* 🌈 RAINBOW BORDER ROLE BUTTON */}
          <div
            onClick={() => scrollToSection(roleRef)}
            className="
              relative cursor-pointer px-4 py-1 rounded-lg 
              text-white font-medium rainbow-border
            "
          >
            Select Your Role
          </div>
        </div>

        {/* 🔔 ALERT BELL */}
        <div className="relative" ref={alertRef}>
          <button
            onClick={() => setShowAlerts(!showAlerts)}
            className="text-white relative hover:text-green-300 transition"
          >
            <Bell className="h-6 w-6" />

            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {showAlerts && (
            <div
              className="
                absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-4 z-[10000]
                animate-fade
              "
            >
              <h3 className="text-green-900 font-semibold mb-3 text-lg">
                Travel Alerts
              </h3>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {alerts.map((msg, i) => (
                  <div
                    key={i}
                    className="
                      p-3 rounded-lg bg-green-50 text-green-800 border border-green-200 
                      text-sm shadow-sm
                    "
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}
