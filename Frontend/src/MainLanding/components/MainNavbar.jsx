import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bell, Globe } from "lucide-react";

export default function MainNavbar({ exploreRef, roleRef, eventsRef, marketplaceRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const alertRef = useRef(null);
  const langRef = useRef(null);

  // ----------------- SELF LANGUAGE NAMES -----------------
  const languages = [
    { key: "Hindi", label: "हिन्दी" },
    { key: "English", label: "English" },
    { key: "Santhali", label: "ᱥᱟᱱᱛᱟᱞᱤ" },
    { key: "Ho", label: "𑠀𑠤" },
    { key: "Mundari", label: "ᱢᱩᱱᱰᱟᱨᱤ" },
    { key: "Kurukh", label: "कुड़ुख" },
    { key: "Kharia", label: "खड़िया" },
    { key: "Nagpuri", label: "नगपुरी" },
    { key: "Panchpargania", label: "पंचपरगनिया" },
    { key: "Khortha", label: "खोरठा" },
    { key: "Kurmali", label: "कुर्माली" },
  ];

  // CURRENT LANGUAGE
  const [language, setLanguage] = useState(languages[0].key);

  // 🔄 AUTO CHANGE LANGUAGE EVERY 1 SECOND
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % languages.length;
      setLanguage(languages[index].key);
    }, 3000); // change every 1 sec

    return () => clearInterval(interval);
  }, []);

  // ----------------- NAVIGATION TEXT TRANSLATIONS -----------------
  const translations = {
    English: {
      explore: "Explore",
      events: "Events",
      marketplace: "Marketplace",
      role: "Select Your Role",
      alerts: "Travel Alerts",
    },
    Hindi: {
      explore: "अन्वेषण",
      events: "कार्यक्रम",
      marketplace: "बाज़ार",
      role: "अपनी भूमिका चुनें",
      alerts: "यात्रा अलर्ट",
    },
    Santhali: {
      explore: "ᱪᱟᱵᱟᱛ",
      events: "ᱪᱟᱹᱱᱤᱭᱟᱜ",
      marketplace: "ᱢᱤᱫᱟᱜ ᱛᱟᱭᱟᱜ",
      role: "ᱨᱚᱞ ᱚᱱᱚᱞ",
      alerts: "ᱟᱞᱮᱨᱴ",
    },
    Ho: {
      explore: "ᱠᱚᱨᱚᱢ",
      events: "ᱦᱚᱨᱚᱜ",
      marketplace: "ᱠᱟᱹᱴᱩᱜ",
      role: "ᱨᱚᱞ ᱪᱤᱱᱟ",
      alerts: "ᱟᱞᱮᱨᱴ",
    },
    Mundari: {
      explore: "Horoko",
      events: "Hunrum",
      marketplace: "Bazaar",
      role: "Role Beye",
      alerts: "Alert Beye",
    },
    Kurukh: {
      explore: "Dhumma",
      events: "Reena",
      marketplace: "Hata",
      role: "Role Meansa",
      alerts: "Alert",
    },
    Kharia: {
      explore: "Nongta",
      events: "Karian",
      marketplace: "Bazar",
      role: "Role Cheya",
      alerts: "Alert",
    },
    Nagpuri: {
      explore: "घुमइया",
      events: "समारोह",
      marketplace: "बाजार",
      role: "भूमिका चुनें",
      alerts: "अलर्ट",
    },
    Panchpargania: {
      explore: "घुमो",
      events: "इवेंट",
      marketplace: "हाट",
      role: "भूमिका",
      alerts: "सूचना",
    },
    Khortha: {
      explore: "घुमाऽ",
      events: "मेला",
      marketplace: "बाजार",
      role: "भूमिका चुनऽ",
      alerts: "अलारट",
    },
    Kurmali: {
      explore: "भ्रमण",
      events: "उत्सव",
      marketplace: "हाट",
      role: "भूमिका चुनू",
      alerts: "सूचना",
    },
  };

  // HANDLE SCROLL
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLOSE DROPDOWNS ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (alertRef.current && !alertRef.current.contains(e.target)) {
        setShowAlerts(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setShowLang(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // SMOOTH SCROLL
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
            {translations[language].explore}
          </p>

          <p className="hover:text-green-300 cursor-pointer" onClick={() => scrollToSection(eventsRef)}>
            {translations[language].events}
          </p>

          <p className="hover:text-green-300 cursor-pointer" onClick={() => scrollToSection(marketplaceRef)}>
            {translations[language].marketplace}
          </p>

          <Link to="/ar-vr" className="hover:text-green-300 transition">
            AR/VR
          </Link>

          <div
            onClick={() => scrollToSection(roleRef)}
            className="relative cursor-pointer px-4 py-1 rounded-lg text-white font-medium rainbow-border"
          >
            {translations[language].role}
          </div>
        </div>

        {/* 🔔 ALERT + 🌐 LANGUAGE */}
        <div className="flex items-center gap-6">

          {/* LANGUAGE DROPDOWN */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setShowLang(!showLang)}
              className="text-white hover:text-green-300 transition flex items-center gap-2"
            >
              <Globe className="h-6 w-6" />
              <span>
                {languages.find(l => l.key === language)?.label}
              </span>
            </button>

            {showLang && (
              <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-xl p-2">
                {languages.map((lang) => (
                  <p
                    key={lang.key}
                    className="p-2 text-sm cursor-pointer hover:bg-green-100 rounded"
                    onClick={() => {
                      setLanguage(lang.key);
                      setShowLang(false);
                    }}
                  >
                    {lang.label}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* ALERT BELL */}
          <div className="relative" ref={alertRef}>
            <button
              onClick={() => setShowAlerts(!showAlerts)}
              className="text-white hover:text-green-300 transition relative"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {showAlerts && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-green-900 font-semibold mb-3 text-lg">
                  {translations[language].alerts}
                </h3>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {[
                    "🌧️ Weather Alert: Heavy rain expected in Netarhat.",
                    "⚠️ Hundru Falls water level very high. Avoid visiting.",
                    "🚧 Traffic Jam: Ranchi → Patratu route slow.",
                    "🔥 Forest Entry Restricted: Betla area closed today.",
                    "🎉 Festival Rush: High crowd near Pahari Mandir.",
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-green-50 text-green-800 border border-green-200 text-sm shadow-sm"
                    >
                      {msg}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
