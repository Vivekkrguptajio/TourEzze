import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Bell, Globe, User, Store, Navigation, Building, Shield, ChevronDown, Search, Heart, MoreHorizontal } from "lucide-react";

export default function MainNavbar({ exploreRef, eventsRef, marketplaceRef }) {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('explore');

  const alertRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

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

  // Prevent back-scroll when full menu is open
  useEffect(() => {
    if (isFullMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFullMenuOpen]);

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

  // ----------------- MEGA MENU DATA -----------------
  const exploreItems = [
    { title: "About Jharkhand", desc: 'Welcome to the "Land of Forests," a green paradise where nature and tradition live in harmony.' },
    { title: "Jharkhand Interactive Map", desc: "Discover nearby waterfalls, ancient temples, local tribal markets, and more." },
    { title: "Legends of Jharkhand", desc: "Follow the footsteps of legends like Birsa Munda and MS Dhoni in the land they call home." },
    { title: "Jharkhand Districts", desc: 'From the "Steel City" of Jamshedpur to the "City of Waterfalls" Ranchi, every district has a story.' },
    { title: "Local Culture", desc: "Admire the intricate Sohrai art, vibrant Chhau dance, and the rich heritage of our tribal roots." },
    { title: "Spiritual Sojourn", desc: "Experience peace at the holy Baidyanath Dham or the serene heights of Shikharji." },
    { title: "Adventures in Netarhat", desc: 'Escape to the "Queen of Chotanagpur" to witness the most beautiful sunrises in the hills.' },
    { title: "Wild Betla", desc: "Answer the call of the wild and experience the thrill of tigers and elephants in their natural habitat." }
  ];

  const thingsToDoItems = [
    { title: "Arts & Culture", desc: "Uncover the state’s deep tribal roots through Sohrai art and vibrant Chhau dance performances." },
    { title: "Experiences", desc: "Embark on thrilling treks in the Netarhat hills or boating in the scenic Patratu Valley." },
    { title: "Food & Drink", desc: "Taste authentic local flavors like Dhuska, Pitha, and seasonal tribal delicacies." },
    { title: "New & Trending", desc: "Visit the latest eco-tourism resorts and the newly developed waterfronts at Dhurwa Dam." },
    { title: "Shopping", desc: "Find unique handmade treasures at Jharcraft or traditional tribal jewelry in local haats." },
    { title: "Sights & Attractions", desc: "Marvel at the majestic Hundru Falls and the sacred architecture of the Baidyanath Temple." },
    { title: "Wellness in Jharkhand", desc: "Plan a rejuvenating retreat amidst the serene 'Sal' forests and natural hot springs." },
    { title: "Itineraries", desc: "What do you travel for? Find inspiration with our curated forest and temple trails." }
  ];

  const eatAndDrinkItems = [
    { title: "Jharkhand, A Rustic Way to Dine", desc: "From local village haats to fine dining in Ranchi, discover the soul of Jharkhandi food." },
    { title: "New Restaurants", desc: "Explore the latest rooftop cafes and ethnic kitchens popping up in Jamshedpur and Ranchi." },
    { title: "Local Food Guide 2026", desc: "See the top-rated spots for authentic Dhuska, Chilka Roti, and Rugra mushroom dishes." },
    { title: "Traditional Feasts", desc: "Weekends are for community feasting and enjoying traditional tribal slow-cooked meals." },
    { title: "Traditional Flavors", desc: "Explore plant-based concepts featuring locally sourced forest greens and nutritious millets." },
    { title: "Dining Deals", desc: "Enjoy the best local street food and thalis at incredible prices across the state." },
    { title: "Best Eateries in Jharkhand", desc: "Discover the top dining experiences with our comprehensive Jharkhand restaurant guide." }
  ];

  const eventsItems = [
    { title: "Jharkhand Event Calendar", desc: "Don't miss a beat – from the vibrant Sarhul festival to local tribal fairs and state-wide activities." },
    { title: "Jharkhand, A Rustic Way to Dine", desc: "From March 15th to April 10th, enjoy the Tribal Food Festival featuring authentic forest-to-table flavors." },
    { title: "National Tribal Dance Festival", desc: "Explore the finest folk art and rhythmic Chhau performances from across the country in Ranchi." },
    { title: "Birsa Munda Jayanti", desc: "Celebrate Jharkhand Foundation Day with massive cultural parades and state-wide festivities on Nov 15th." },
    { title: "Sohrai & Khovar Art Expo", desc: "Spend an evening admiring the intricate wall murals and earth-tone paintings of Hazaribagh." },
    { title: "Patratu Lake Festival", desc: "Watch traditional boat races and enjoy water sports at the scenic Patratu Dam waterfront." },
    { title: "Tribal Art Bazaar", desc: "Make way for the region’s largest affordable tribal handicraft and Dokra art fair." },
    { title: "Winter in Netarhat", desc: "Experience the most serene winter festival in the 'Queen of Chotanagpur' with music and stargazing." }
  ];

  const planItems = [
    { title: "Travel Permits", desc: "Check for any specific forest entry permits required for national parks like Bettla or Dalma." },
    { title: "Essentials", desc: "From local customs to packing for varied terrain, we answer all your travel questions." },
    { title: "Flights", desc: "Book your flights to Ranchi (IXR) or Deoghar (DGH) and plan your journey across the state." },
    { title: "Accommodation", desc: "Jharkhand offers everything from luxury city hotels to serene eco-forest guest houses." },
    { title: "Getting to Jharkhand", desc: "Whether by air or the extensive rail network, reaching the heart of eastern India is a breeze." },
    { title: "Getting around Jharkhand", desc: "Seamlessly travel between districts using local taxis, inter-city buses, or the scenic rail routes." },
    { title: "Safety", desc: "Your complete guide to exploring Jharkhand’s forests and cities with peace of mind." },
    { title: "Weather", desc: "Find out the best time to visit, from the misty winters in Netarhat to the pleasant spring." },
    { title: "Local Currency", desc: "All you need to know about digital payments and cash availability in rural and urban areas." },
    { title: "Accessibility", desc: "Helpful information for travelers with special needs exploring our temples and parks." },
    { title: "Jharkhand Tourism Pass", desc: "Unlock entry to major museums and parks with our all-in-one tourist access pass." },
    { title: "Download Apps", desc: "Get our official tourism app for live maps, festival dates, and emergency contacts." }
  ];

  const dealsItems = [
    { title: "Attraction Deals", desc: "Save big with great combo offers on entry tickets to Jharkhand's top waterfalls, museums, and wildlife parks." },
    { title: "Dining Deals", desc: "Reserve a table at top-rated ethnic kitchens for incredible prices on authentic Jharkhandi Thalis." },
    { title: "Shopping Deals", desc: "Indulge in authentic tribal crafts for less with exclusive discounts at Jharcraft and local artisan outlets." },
    { title: "Hotel Deals", desc: "Enjoy your stay in the 'Land of Forests' with incredible offers on eco-resorts and luxury city hotels." }
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-[999] transition-all duration-300 border-b border-gray-100/50
        ${isScrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-md" : "py-4 bg-white/80 backdrop-blur-sm"}`}
      >
        <div className="max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1700px] mx-auto px-6 xl:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer shrink-0 z-10"
        >
          <img 
            src="/Photos/logo.png" 
            alt="TourEzze Logo" 
            className={`transition-all duration-300 object-contain ${isScrolled ? "h-10" : "h-12"}`}
          />
          <h1 className={`font-bold text-slate-950 tracking-tight transition-all duration-300 ${isScrolled ? "text-lg xl:text-xl" : "text-xl xl:text-2xl"}`}>
            TourEzze
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-0.5 xl:gap-1 text-slate-900 font-medium text-[12px] xl:text-[13px] px-2">
          <Link 
            to="/" 
            className={`transition-colors px-2 xl:px-3 py-1.5 rounded-full font-bold ${activeTab === 'Home' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </Link>
          
          <div 
            className={`flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap h-full relative font-bold ${activeTab === 'Explore' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onMouseEnter={() => handleMouseEnter('explore')}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTab('Explore')}
          >
            <span className={activeDropdown === 'explore' && activeTab !== 'Explore' ? "text-[#005f83]" : ""}>Explore Jharkhand</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'explore' ? "rotate-180" : ""} ${activeDropdown === 'explore' && activeTab !== 'Explore' ? "text-[#005f83]" : ""}`} />
            
            {/* Invisible bridge to prevent mouse leave gap */}
            {activeDropdown === 'explore' && <div className="absolute top-full left-0 w-full h-8 bg-transparent" />}
          </div>

          <div 
            className={`flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap font-bold h-full relative ${activeTab === 'Things' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onMouseEnter={() => handleMouseEnter('things')}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTab('Things')}
          >
            <span className={activeDropdown === 'things' && activeTab !== 'Things' ? "text-[#005f83]" : ""}>Things to do</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'things' ? "rotate-180" : ""} ${activeDropdown === 'things' && activeTab !== 'Things' ? "text-[#005f83]" : ""}`} />
            
            {/* Invisible bridge to prevent mouse leave gap */}
            {activeDropdown === 'things' && <div className="absolute top-full left-0 w-full h-8 bg-transparent" />}
          </div>

          <div 
            className={`flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap font-bold h-full relative ${activeTab === 'Eat' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onMouseEnter={() => handleMouseEnter('eat')}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTab('Eat')}
          >
            <span className={activeDropdown === 'eat' && activeTab !== 'Eat' ? "text-[#005f83]" : ""}>Eat & drink</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'eat' ? "rotate-180" : ""} ${activeDropdown === 'eat' && activeTab !== 'Eat' ? "text-[#005f83]" : ""}`} />
            
            {/* Invisible bridge to prevent mouse leave gap */}
            {activeDropdown === 'eat' && <div className="absolute top-full left-0 w-full h-8 bg-transparent" />}
          </div>

          <div 
            className={`flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap font-bold h-full relative ${activeTab === 'Events' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onMouseEnter={() => handleMouseEnter('events')}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTab('Events')}
          >
            <span className={activeDropdown === 'events' && activeTab !== 'Events' ? "text-[#005f83]" : ""}>Events & Festivals</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'events' ? "rotate-180" : ""} ${activeDropdown === 'events' && activeTab !== 'Events' ? "text-[#005f83]" : ""}`} />
            
            {/* Invisible bridge to prevent mouse leave gap */}
            {activeDropdown === 'events' && <div className="absolute top-full left-0 w-full h-8 bg-transparent" />}
          </div>

          <div 
            className={`flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap font-bold h-full relative ${activeTab === 'Plan' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onMouseEnter={() => handleMouseEnter('plan')}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTab('Plan')}
          >
            <span className={activeDropdown === 'plan' && activeTab !== 'Plan' ? "text-[#005f83]" : ""}>Plan Your Trip</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'plan' ? "rotate-180" : ""} ${activeDropdown === 'plan' && activeTab !== 'Plan' ? "text-[#005f83]" : ""}`} />
            
            {/* Invisible bridge to prevent mouse leave gap */}
            {activeDropdown === 'plan' && <div className="absolute top-full left-0 w-full h-8 bg-transparent" />}
          </div>

          <div 
            className={`flex items-center gap-0.5 px-2 xl:px-3 py-1.5 rounded-full cursor-pointer transition-colors whitespace-nowrap font-bold h-full relative ${activeTab === 'Deals' ? 'bg-[#005f83] text-white' : 'hover:text-[#005f83]'}`}
            onMouseEnter={() => handleMouseEnter('deals')}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTab('Deals')}
          >
            <span className={activeDropdown === 'deals' && activeTab !== 'Deals' ? "text-[#005f83]" : ""}>Deals & offers</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'deals' ? "rotate-180" : ""} ${activeDropdown === 'deals' && activeTab !== 'Deals' ? "text-[#005f83]" : ""}`} />
            
            {/* Invisible bridge to prevent mouse leave gap */}
            {activeDropdown === 'deals' && <div className="absolute top-full left-0 w-full h-8 bg-transparent" />}
          </div>

          <div 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-300 ml-1 shrink-0 group/three"
            onClick={() => setIsFullMenuOpen(true)}
          >
            <MoreHorizontal className="w-4 h-4 text-slate-600 group-hover/three:text-[#005f83] transition-colors" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-1.5 xl:gap-5 text-slate-700 shrink-0 z-10">
          
          <button className="hover:text-[#005f83] transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <button className="hover:text-[#005f83] transition-colors">
            <Heart className="w-5 h-5" />
          </button>

          {/* LANGUAGE MODAL TRIGGER */}
          <div 
            className="flex items-center gap-1 cursor-pointer hover:text-[#005f83] transition-colors text-sm font-semibold"
            onClick={() => setIsLangModalOpen(true)}
          >
            <span>{language}</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <Link to="/login" className="font-semibold text-sm hover:text-[#005f83] transition-colors">
            Login
          </Link>

          {/* ALERTS */}
          <div className="relative" ref={alertRef}>
            <button
              onClick={() => setShowAlerts(!showAlerts)}
              className="text-slate-700 hover:text-amber-600 transition-colors relative mt-1"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>

            {showAlerts && (
              <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-slideDown z-[1000]">
                <h3 className="text-slate-900 font-bold mb-3 text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  {translations[language].alerts}
                </h3>

                <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide">
                  {[
                    "🌧️ Heavy rain expected in Netarhat.",
                    "⚠️ Hundru Falls water level high.",
                    "🚧 Traffic jam: Ranchi → Patratu.",
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className="p-3 bg-red-50/50 border border-red-100 rounded-xl text-slate-700 text-sm shadow-sm"
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

      {/* MEGA MENU - DYNAMIC CONTENT */}
      <div className="absolute left-0 top-[100%] w-full flex justify-center pointer-events-none">
        <div 
          className={`w-[98%] xl:w-[95%] max-w-[1700px] bg-white border-t border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 origin-top pointer-events-auto
            rounded-b-[24px] xl:rounded-b-[32px] overflow-hidden
            ${activeDropdown ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}`}
          onMouseEnter={() => activeDropdown && handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-6 xl:px-12 py-8 xl:py-10 flex gap-8">
            
            {/* Main Content Grid */}
            <div className="flex-1 grid grid-cols-4 gap-x-8 gap-y-10 border-r border-gray-100 pr-8">
              {(
                activeDropdown === 'explore' ? exploreItems : 
                activeDropdown === 'things' ? thingsToDoItems : 
                activeDropdown === 'eat' ? eatAndDrinkItems :
                activeDropdown === 'events' ? eventsItems :
                activeDropdown === 'plan' ? planItems :
                dealsItems
              ).map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <h4 className="font-bold text-slate-900 text-[14px] xl:text-[15px] mb-2 group-hover:text-[#005f83] transition-colors tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-[12px] xl:text-[13px] leading-relaxed group-hover:text-slate-600 transition-colors pr-2">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Image Tile */}
            <div className="w-[280px] shrink-0 group cursor-pointer bg-[#fbfbfb] rounded-[24px] p-2 flex flex-col hover:bg-gray-50 transition-colors">
              <img 
                src={
                  activeDropdown === 'explore' ? "/Photos/ranchi.jpg" : 
                  activeDropdown === 'things' ? "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=600&auto=format&fit=crop" :
                  activeDropdown === 'eat' ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop" :
                  activeDropdown === 'events' ? "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop" :
                  activeDropdown === 'plan' ? "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop" :
                  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop"
                } 
                alt={activeDropdown} 
                className="w-full h-[140px] object-cover rounded-[16px] transition-transform duration-700 group-hover:scale-[1.02]"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=600&auto=format&fit=crop";
                }}
              />
              <div className="py-5 text-center flex-1 flex flex-col justify-center">
                <h4 className="font-bold text-slate-900 text-[15px]">
                  {activeDropdown === 'explore' ? "Meet our curators" : 
                   activeDropdown === 'things' ? "Things to do in Jharkhand" : 
                   activeDropdown === 'eat' ? "Best Food in Jharkhand" :
                   activeDropdown === 'events' ? "Cultural Events 2026" :
                   activeDropdown === 'plan' ? "Plan Your Heart's Journey" :
                   "Exclusive Jharkhand Deals"}
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>

      {/* LANGUAGE SELECTION MODAL */}
      {isLangModalOpen && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsLangModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-lg shadow-2xl p-6 overflow-hidden animate-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Select Language</h2>
              <button 
                onClick={() => setIsLangModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors text-slate-500"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.key}
                  onClick={() => {
                    setLanguage(lang.key);
                    setIsLangModalOpen(false);
                  }}
                  className={`p-3 border-2 transition-all duration-300 text-left
                    ${language === lang.key 
                      ? "border-[#005f83] bg-blue-50 text-[#005f83]" 
                      : "border-gray-50 bg-gray-50 hover:border-gray-200 hover:bg-gray-100 text-slate-600"
                    }`}
                >
                  <div className="font-bold text-base mb-0.5">{lang.label}</div>
                  <div className="text-[10px] opacity-70 uppercase tracking-wider font-semibold">
                    {lang.key === lang.label ? "" : lang.key}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 text-center">
              <p className="text-slate-400 text-xs">TourEzze is available in multiple local and global languages.</p>
            </div>
          </div>
        </div>
      )}
      {/* FULL SCREEN BIG MENU */}
      <div 
        className={`fixed inset-0 z-[1100] bg-white transition-all duration-500 flex flex-col
          ${isFullMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="px-8 xl:px-16 py-6 flex items-center justify-between border-b border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Menu</h2>
          <button 
            onClick={() => setIsFullMenuOpen(false)}
            className="flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#005f83] rounded-lg font-bold hover:bg-blue-100 transition-colors text-sm"
          >
            close <span className="text-lg">✕</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-1/4 xl:w-1/5 border-r border-gray-100 py-8 px-6 xl:px-12 overflow-y-auto bg-gray-50/30">
            <div className="space-y-1">
              {[
                { id: 'explore', label: 'Explore Jharkhand' },
                { id: 'things', label: 'Things to do' },
                { id: 'eat', label: 'Eat & Drink' },
                { id: 'events', label: 'Events & Festivals' },
                { id: 'plan', label: 'Plan your trip' },
                { id: 'deals', label: 'Deals & Offers' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveMenuTab(cat.id)}
                  className={`w-full text-left px-5 py-3 rounded-xl font-bold text-[15px] transition-all duration-300
                    ${activeMenuTab === cat.id 
                      ? 'bg-[#005f83] text-white shadow-md' 
                      : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid Content */}
          <div className="flex-1 py-10 px-12 xl:px-16 overflow-y-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 max-w-6xl">
              {(
                activeMenuTab === 'explore' ? exploreItems : 
                activeMenuTab === 'things' ? thingsToDoItems : 
                activeMenuTab === 'eat' ? eatAndDrinkItems :
                activeMenuTab === 'events' ? eventsItems :
                activeMenuTab === 'plan' ? planItems :
                dealsItems
              ).map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#005f83] transition-colors tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Feature Card */}
          <div className="w-1/4 xl:w-2/12 border-l border-gray-50 py-12 px-8 flex flex-col items-center bg-white/50">
            <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg mb-5">
              <img 
                src={
                  activeMenuTab === 'explore' ? "/Photos/ranchi.jpg" : 
                  activeMenuTab === 'things' ? "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=600&auto=format&fit=crop" :
                  activeMenuTab === 'eat' ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop" :
                  activeMenuTab === 'events' ? "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop" :
                  activeMenuTab === 'plan' ? "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop" :
                  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop"
                } 
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Meet our curators</h3>
            <p className="text-slate-400 text-[12px] italic text-center leading-tight">Discover the stories behind our journeys.</p>
          </div>
        </div>
      </div>
    </>
  );
}
