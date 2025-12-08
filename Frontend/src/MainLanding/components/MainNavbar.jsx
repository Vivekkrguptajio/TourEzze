import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bell, Globe, User, Store, Navigation, Building, Shield } from "lucide-react";

export default function MainNavbar({ exploreRef, roleRef, eventsRef, marketplaceRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);

  const alertRef = useRef(null);

  // ----------------- LANGUAGES -----------------
  const languages = [
    { key: "Hindi", label: "हिन्दी" },
    { key: "English", label: "English" },
    { key: "Santhali", label: "ᱥᱟᱱᱛᱟᱞᱤ" },
    { key: "Nagpuri", label: "नगपुरी" },
    { key: "Khortha", label: "खोरठा" },
    { key: "Ho", label: "𑣼𑣉 (Ho)" },
    { key: "Bengali", label: "বাংলা" },
    { key: "Telugu", label: "తెలుగు" },
    { key: "Marathi", label: "मराठी" },
    { key: "Tamil", label: "தமிழ்" },
    { key: "Gujarati", label: "ગુજરાતી" },
    { key: "Kannada", label: "ಕನ್ನಡ" },
 
  ];

  const [language, setLanguage] = useState("English");
  const [rotatingLang, setRotatingLang] = useState("English");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % languages.length;
      setRotatingLang(languages[index].key);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ----------------- TRANSLATIONS -----------------
  const translations = {
    English: {
      explore: "Tourist Places",
      events: "Events",
      marketplace: "Marketplace",
      role: "Select Your Role",
      alerts: "Travel Alerts",
    },
    Hindi: {
      explore: "पर्यटक स्थल",
      events: "कार्यक्रम",
      marketplace: "बाज़ार",
      role: "अपनी भूमिका चुनें",
      alerts: "यात्रा अलर्ट",
    },
    Santhali: {
      explore: "ᱛᱚᱨᱤᱥᱛ ᱯᱞᱮᱥ",
      events: "ᱪᱟᱹᱱᱤᱭᱟᱜ",
      marketplace: "ᱢᱤᱫᱟᱜ",
      role: "ᱨᱚᱞ",
      alerts: "ᱟᱞᱮᱨᱴ",
    },
    Nagpuri: {
      explore: "गुमने के जगह",
      events: "समारोह",
      marketplace: "बाजार",
      role: "भूमिका चुनें",
      alerts: "अलर्ट",
    },
    Khortha: {
      explore: "परयटक जगह",
      events: "मेला",
      marketplace: "बाजार",
      role: "भूमिका चुनऽ",
      alerts: "अलारट",
    },
    Ho: {
      explore: "𑣘𑣋𑣼𑣜 𑣙𑣂𑣼𑣉",
      events: "𑣙𑣁𑣕𑣂𑣼𑣉",
      marketplace: "𑣛𑣃𑣜𑣂𑣼𑣉",
      role: "𑣌𑣁𑣜𑣄",
      alerts: "𑣌𑣋𑣜𑣁𑣙𑣂",
    },
    Bengali: {
      explore: "পর্যটন স্থান",
      events: "ইভেন্ট",
      marketplace: "বাজার",
      role: "আপনার ভূমিকা নির্বাচন করুন",
      alerts: "ভ্রমণ সতর্কতা",
    },
    Telugu: {
      explore: "పర్యాటక ప్రదేశాలు",
      events: "ఈవెంట్లు",
      marketplace: "మార్కెట్",
      role: "మీ పాత్రను ఎంచుకోండి",
      alerts: "ప్రయాణ హెచ్చరికలు",
    },
    Marathi: {
      explore: "पर्यटन स्थळे",
      events: "कार्यक्रम",
      marketplace: "बाजार",
      role: "भूमिका निवडा",
      alerts: "प्रवास सूचना",
    },
    Tamil: {
      explore: "சுற்றுலா இடங்கள்",
      events: "நிகழ்வுகள்",
      marketplace: "சந்தை",
      role: "உங்கள் பாத்திரத்தை தேர்ந்தெடுக்கவும்",
      alerts: "பயண எச்சரிக்கை",
    },
    Gujarati: {
      explore: "પર્યટન સ્થળો",
      events: "ઇવેન્ટ્સ",
      marketplace: "બજાર",
      role: "તમારી ભૂમિકા પસંદ કરો",
      alerts: "પ્રવાસ ચેતવણી",
    },
    Kannada: {
      explore: "ಪರ್ಯಟನಾ ಸ್ಥಳಗಳು",
      events: "ಕಾರ್ಯಕ್ರಮಗಳು",
      marketplace: "ಮಾರುಕಟ್ಟೆ",
      role: "ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      alerts: "ಪ್ರಯಾಣ ಎಚ್ಚರಿಕೆ",
    },
 
  };

  // ----------------- SCROLL EFFECT -----------------
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------- OUTSIDE CLICK CLOSE -----------------
  useEffect(() => {
    const click = (e) => {
      if (alertRef.current && !alertRef.current.contains(e.target)) setShowAlerts(false);
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  // ----------------- SMOOTH SCROLL -----------------
  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    const offset = -85;
    const pos = ref.current.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: pos, behavior: "smooth" });
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[999] transition-all duration-300 
      ${isScrolled ? "py-2 bg-green-900/60 backdrop-blur-lg shadow-lg" : "py-4 bg-green-900/40 backdrop-blur-xl shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h1 className={`font-bold text-white ${isScrolled ? "text-lg" : "text-2xl"}`}>TourEzze</h1>
        </div>

        {/* NAV LINKS */}
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

          <Link to="/ar-vr" className="hover:text-green-300 transition">Packages</Link>

          {/* ROLE DROPDOWN */}
          <div className="relative group">
            <div className="cursor-pointer px-4 py-1 rounded-lg text-white rainbow-border transition group-hover:bg-white group-hover:text-green-900">
              {translations[language].role}
            </div>

            <div
              className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl p-3 z-50 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                translate-y-2 group-hover:translate-y-0 transition-all duration-300 space-y-3"
            >
              {[ 
                { icon: <User className="w-6 h-6 text-emerald-600" />, title: "Tourist", link: "/role/tourist" },
                { icon: <Store className="w-6 h-6 text-orange-600" />, title: "Vendor / Artisan", link: "/role/vendor" },
                { icon: <Navigation className="w-6 h-6 text-teal-600" />, title: "Guide / Transport", link: "/role/guide" },
                { icon: <Building className="w-6 h-6 text-amber-600" />, title: "Hotel / Homestay", link: "/role/hotel-owner" },
                { icon: <Shield className="w-6 h-6 text-blue-600" />, title: "Government", link: "/role/government" },
              ].map((role, i) => (
                <Link
                  key={i}
                  to={role.link}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 
                    hover:shadow-md hover:-translate-y-0.5 transition duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100">
                    {role.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{role.title}</h4>
                    <p className="text-xs text-gray-500">Enter Portal →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* LANGUAGE */}
          <div className="relative group">
            <div
              className="cursor-pointer px-4 py-1 rounded-lg text-white rainbow-border 
              transition group-hover:bg-white group-hover:text-green-900 flex items-center gap-2"
            >
              <Globe className="h-6 w-6" />
              <span className="inline-block w-[90px] text-left truncate">
                {languages.find((l) => l.key === rotatingLang)?.label}
              </span>
            </div>

            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl p-3 z-50
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                translate-y-2 group-hover:translate-y-0 transition-all duration-300 space-y-2"
            >
              {languages.map((lang) => (
                <div
                  key={lang.key}
                  className="p-3 text-sm rounded-xl border border-gray-100 cursor-pointer 
                    hover:bg-green-50 hover:-translate-y-0.5 hover:shadow-md transition duration-300"
                  onClick={() => setLanguage(lang.key)}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          </div>

          {/* ALERTS */}
          <div className="relative" ref={alertRef}>
            <button
              onClick={() => setShowAlerts(!showAlerts)}
              className="text-white hover:text-green-300 transition relative"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {showAlerts && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-4 animate-slideDown">
                <h3 className="text-green-900 font-semibold mb-3 text-lg">
                  {translations[language].alerts}
                </h3>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {[
                    "🌧️ Heavy rain expected in Netarhat.",
                    "⚠️ Hundru Falls water level high.",
                    "🚧 Traffic jam: Ranchi → Patratu.",
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm shadow"
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
