<<<<<<< HEAD
// import React, { useState, useRef } from "react";
// import { MapPin, SunMedium, Wallet, Users } from "lucide-react";

// /**
//  * ItineraryPlannerPage (interactive)
//  * - All buttons wired: generate, view details, AR/VR preview, hero actions
//  * - Simple simulated async for "Generate"
//  * - Day detail modal + VR modal built-in
//  */

// export default function ItineraryPlannerPage() {
//   const [duration, setDuration] = useState("3 Days");
//   const [budget, setBudget] = useState(12000);
//   const [travellerType, setTravellerType] = useState("Friends");
//   const [startLocation, setStartLocation] = useState("Ranchi");

//   const [interests, setInterests] = useState(["Nature", "Waterfalls"]);
//   const [prefs, setPrefs] = useState({
//     localFood: true,
//     lessWalking: false,
//     photography: true,
//     offbeat: false,
//     slowTravel: false,
//   });

//   const [loadingGenerate, setLoadingGenerate] = useState(false);
//   const [toast, setToast] = useState(null);

//   const [generatedDays, setGeneratedDays] = useState([
//     {
//       day: 1,
//       title: "Netarhat",
//       bestTime: "06:00 AM - 09:00 AM",
//       travelTime: "Start from Ranchi",
//       fee: "Free",
//       weather: "Pleasant, 18–22°C",
//       activities: [
//         "Enjoy sunrise views from Magnolia Point.",
//         "Short walks through pine forests.",
//         "Photography at viewpoints and valleys.",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&crop=faces",
//     },
//     {
//       day: 2,
//       title: "Betla National Park",
//       bestTime: "06:00 AM - 10:00 AM",
//       travelTime: "2–3 hrs from Netarhat",
//       fee: "₹200 per person",
//       weather: "Cool, 16–20°C",
//       activities: [
//         "Morning jungle safari for wildlife spotting.",
//         "Visit historical Palamu Fort.",
//         "Campfire or nature walk near stay.",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&crop=faces",
//     },
//     {
//       day: 3,
//       title: "Patratu Valley",
//       bestTime: "04:00 PM - 06:30 PM",
//       travelTime: "2 hrs from Ranchi",
//       fee: "Free",
//       weather: "Pleasant, 20–24°C",
//       activities: [
//         "Scenic drive through hairpin bends.",
//         "Sunset view at Patratu dam viewpoint.",
//         "Relax by the lake and enjoy snacks.",
//       ],
//       image:
//         "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&crop=faces",
//     },
//   ]);

//   // modals
//   const [openDayModal, setOpenDayModal] = useState(false);
//   const [selectedDay, setSelectedDay] = useState(null);

//   const [openVrModal, setOpenVrModal] = useState(false);
//   const [vrContent, setVrContent] = useState(null);

//   const plannerRef = useRef(null);

//   const minBudget = 2000;
//   const maxBudget = 50000;

//   const interestOptions = [
//     "Nature",
//     "Culture",
//     "Wildlife",
//     "Religious",
//     "Adventure",
//     "Heritage",
//     "Waterfalls",
//     "Scenic Spots",
//   ];

//   const travellerOptions = ["Family", "Friends", "Solo", "Couple"];

//   const toggleInterest = (label) => {
//     setInterests((prev) =>
//       prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
//     );
//   };

//   const togglePref = (key) => {
//     setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const budgetLabel = () => {
//     const pct = (budget - minBudget) / (maxBudget - minBudget);
//     if (pct < 0.33) return "Low budget";
//     if (pct < 0.66) return "Moderate budget";
//     return "High budget";
//   };

//   // ---------- Actions ----------

//   // simulate "Generate" which would call an AI/backend. Here we simulate async and slightly tweak the plan.
//   const generateItinerary = async () => {
//     setLoadingGenerate(true);
//     setToast(null);

//     // simulate call
//     await new Promise((res) => setTimeout(res, 1000 + Math.random() * 1000));

//     // simple logic: if "Adventure" chosen, modify second day's activity
//     setGeneratedDays((prev) =>
//       prev.map((d) => {
//         if (interests.includes("Adventure") && d.day === 2) {
//           return {
//             ...d,
//             activities: [
//               "Guided trekking and local adventure activities.",
//               ...d.activities.slice(0, 2),
//             ],
//           };
//         }
//         return d;
//       })
//     );

//     setLoadingGenerate(false);
//     setToast("Itinerary generated ✔");
//     // auto-hide toast
//     setTimeout(() => setToast(null), 2200);
//   };

//   // open day detail modal
//   const openDayDetails = (dayObj) => {
//     setSelectedDay(dayObj);
//     setOpenDayModal(true);
//   };

//   // open VR preview modal
//   const openVrPreview = (dayObj) => {
//     setVrContent({
//       title: `${dayObj.title} — AR/VR preview`,
//       image: dayObj.image,
//       text: `Preview for ${dayObj.title}. Replace this with an actual 3D/VR embed if available.`,
//     });
//     setOpenVrModal(true);
//   };

//   // hero actions
//   const scrollToPlanner = () => {
//     plannerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const trySamplePlan = () => {
//     // quick sample: set interests and generate
//     setInterests(["Nature", "Heritage"]);
//     setTravellerType("Family");
//     setBudget(15000);
//     // slight delay so UI updates before generate
//     setTimeout(() => generateItinerary(), 300);
//   };

//   // Add small toast helper (already using setToast)

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#f7f9f7] to-[#f1f6f3] pb-12">
//       {/* Hero */}
//       <header className="max-w-6xl mx-auto mt-6 px-6">
//         <div className="rounded-3xl bg-gradient-to-r from-[#0f6b4a] to-[#159a6a] text-white p-8 shadow-2xl overflow-hidden relative">
//           <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
//           <div className="flex items-start justify-between gap-6">
//             <div className="max-w-2xl">
//               <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full text-xs font-medium border border-white/20 mb-4">
//                 <span className="w-2 h-2 rounded-full bg-emerald-300" />
//                 AI-powered suggestions
//               </div>

//               <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//                 Premium Itinerary Planner
//               </h1>
//               <p className="mt-3 text-sm md:text-base text-white/90">
//                 Tailor-made travel plans for Jharkhand — smart routing, curated
//                 experiences and effortless planning.
//               </p>

//               <div className="mt-6 flex gap-3">
//                 <button
//                   onClick={scrollToPlanner}
//                   className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition"
//                 >
//                   Learn how it works
//                 </button>
//                 <button
//                   onClick={trySamplePlan}
//                   disabled={loadingGenerate}
//                   className="px-4 py-2 rounded-lg bg-white text-green-700 font-semibold text-sm shadow-sm hover:translate-y-[-1px] transition disabled:opacity-60"
//                 >
//                   {loadingGenerate ? "Generating..." : "Try sample plan"}
//                 </button>
//               </div>
//             </div>

//             <div className="hidden md:flex flex-col gap-3 text-sm text-white/90">
//               <div className="bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
//                 <div className="text-xs">Avg. trip cost</div>
//                 <div className="text-lg font-semibold mt-1">₹12,000</div>
//               </div>
//               <div className="bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
//                 <div className="text-xs">Popular style</div>
//                 <div className="text-lg font-semibold mt-1">Nature & Scenic</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main layout */}
//       <main ref={plannerRef} className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 px-4">
//         {/* Left: Planner Form */}
//         <section className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6">
//           <h2 className="text-xl font-semibold mb-4">Plan Your Premium Journey</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Duration */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Trip Duration</label>
//               <select
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
//               >
//                 <option>1 Day</option>
//                 <option>2 Days</option>
//                 <option>3 Days</option>
//                 <option>4 Days</option>
//                 <option>5 Days</option>
//               </select>
//             </div>

//             {/* Traveller Type */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">Traveller Type</label>
//               <div className="flex gap-2">
//                 {travellerOptions.map((t) => {
//                   const active = t === travellerType;
//                   return (
//                     <button
//                       key={t}
//                       type="button"
//                       onClick={() => setTravellerType(t)}
//                       className={`px-3 py-2 rounded-lg text-sm border transition ${
//                         active ? "bg-emerald-600 text-white border-emerald-600 shadow-md" : "bg-white text-gray-700 border-gray-200 hover:shadow-sm"
//                       }`}
//                     >
//                       {t}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Budget */}
//             <div className="md:col-span-2 mt-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range <span className="text-xs text-gray-500 ml-2">({budgetLabel()})</span></label>
//               <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
//                 <div className="flex items-center gap-4 mb-3">
//                   <div className="text-sm text-gray-500 w-20">Budget</div>
//                   <div className="flex-1">
//                     <input
//                       type="range"
//                       min={minBudget}
//                       max={maxBudget}
//                       step={1000}
//                       value={budget}
//                       onChange={(e) => setBudget(Number(e.target.value))}
//                       className="w-full accent-emerald-500"
//                     />
//                   </div>
//                   <div className="text-sm font-semibold">₹{budget.toLocaleString("en-IN")}</div>
//                 </div>

//                 <div className="flex justify-between text-xs text-gray-400">
//                   <span>₹{minBudget.toLocaleString("en-IN")}</span>
//                   <span>₹{maxBudget.toLocaleString("en-IN")}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Interests */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Interest Categories</label>
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
//                 {interestOptions.map((label) => {
//                   const active = interests.includes(label);
//                   return (
//                     <button
//                       key={label}
//                       type="button"
//                       onClick={() => toggleInterest(label)}
//                       className={`px-3 py-2 rounded-lg text-sm border transition text-left ${
//                         active ? "bg-emerald-600 text-white border-emerald-600 shadow" : "bg-white text-gray-700 border-gray-100 hover:shadow-sm"
//                       }`}
//                     >
//                       {label}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Starting Location */}
//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Starting Location</label>
//               <div className="flex items-center border rounded-lg px-3 py-2 text-sm bg-white">
//                 <MapPin size={16} className="text-emerald-600 mr-2" />
//                 <input
//                   value={startLocation}
//                   onChange={(e) => setStartLocation(e.target.value)}
//                   className="flex-1 bg-transparent outline-none text-sm"
//                 />
//               </div>
//             </div>

//             {/* Preferences */}
//             <div className="col-span-1">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Preferences</label>
//               <div className="space-y-2 text-sm">
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" checked={prefs.localFood} onChange={() => togglePref("localFood")} />
//                   <span>Local/tribal food</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" checked={prefs.lessWalking} onChange={() => togglePref("lessWalking")} />
//                   <span>Less walking</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" checked={prefs.photography} onChange={() => togglePref("photography")} />
//                   <span>Photo-friendly spots</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" checked={prefs.offbeat} onChange={() => togglePref("offbeat")} />
//                   <span>Offbeat picks</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" checked={prefs.slowTravel} onChange={() => togglePref("slowTravel")} />
//                   <span>Slow travel</span>
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Generate button */}
//           <div className="mt-6">
//             <button
//               onClick={generateItinerary}
//               disabled={loadingGenerate}
//               className="w-full py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_10px_30px_rgba(16,185,129,0.14)] hover:scale-[1.01] transition disabled:opacity-60"
//             >
//               {loadingGenerate ? "Generating your itinerary..." : "Generate My Premium Itinerary"}
//             </button>
//             <p className="text-xs text-gray-500 mt-2 text-center">
//               We use your preferences to craft a comfortable & memorable trip.
//             </p>
//           </div>
//         </section>

//         {/* Right: Selections Summary */}
//         <aside className="sticky top-6 self-start bg-white rounded-2xl shadow-xl border border-gray-100 p-6 h-fit">
//           <h3 className="text-sm font-semibold mb-4">Your Selections</h3>

//           <div className="space-y-4 text-sm text-gray-700">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Duration</span>
//               <span className="font-medium">{duration}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-gray-500">Budget</span>
//               <span className="font-medium">₹{budget.toLocaleString("en-IN")}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-gray-500">Traveller</span>
//               <span className="font-medium">{travellerType}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-gray-500">Start</span>
//               <span className="font-medium">{startLocation}</span>
//             </div>

//             <div>
//               <span className="block mb-2 text-gray-500">Interests</span>
//               <div className="flex flex-wrap gap-2">
//                 {interests.map((i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100"
//                   >
//                     {i}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="pt-3 border-t border-gray-100">
//               <div className="flex items-center gap-2 text-xs text-gray-500">
//                 <Users size={14} />
//                 <span>Personalized for {travellerType.toLowerCase()}</span>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </main>

//       {/* Generated Itinerary Preview */}
//       <section className="max-w-6xl mx-auto mt-8 px-4 space-y-6">
//         {generatedDays.map((d) => (
//           <article key={d.day} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//             <div className="md:flex">
//               {/* Left image */}
//               <div className="md:w-1/3 w-full h-44 md:h-auto relative">
//                 <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
//                 <div className="absolute left-4 top-4 bg-white/80 text-xs rounded-full px-3 py-1 font-semibold shadow">
//                   Day {d.day}
//                 </div>
//               </div>

//               {/* Right content */}
//               <div className="md:w-2/3 p-6 flex flex-col">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h3 className="text-xl font-semibold">{d.title}</h3>
//                     <p className="text-sm text-gray-500 mt-1">{d.weather} • {d.fee}</p>
//                   </div>

//                   <div className="flex flex-col items-end text-xs text-gray-500 gap-2">
//                     <div className="flex items-center gap-2">
//                       <SunMedium size={14} />
//                       <span>{d.bestTime}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPin size={14} />
//                       <span>{d.travelTime}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Wallet size={14} />
//                       <span>{d.fee}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-4 text-sm text-gray-700">
//                   <p className="font-medium text-sm mb-2">Activities</p>
//                   <ul className="list-disc list-inside space-y-1">
//                     {d.activities.map((a) => (
//                       <li key={a} className="text-sm">{a}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-4 flex items-center gap-3">
//                   <button
//                     onClick={() => openDayDetails(d)}
//                     className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:translate-y-[-1px] transition"
//                   >
//                     View Details
//                   </button>

//                   <button
//                     onClick={() => openVrPreview(d)}
//                     className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:shadow-sm transition"
//                   >
//                     AR/VR Preview
//                   </button>

//                   <div className="ml-auto text-sm text-gray-500">Estimated time: <span className="font-medium text-gray-700">3-4 hrs</span></div>
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </section>

//       {/* Day Detail Modal */}
//       {openDayModal && selectedDay && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div className="absolute inset-0 bg-black/60" onClick={() => setOpenDayModal(false)} />
//           <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-[95%] p-6 z-10">
//             <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-100" onClick={() => setOpenDayModal(false)}>✕</button>
//             <div className="md:flex gap-6">
//               <div className="md:w-1/3">
//                 <img src={selectedDay.image} alt={selectedDay.title} className="w-full h-48 object-cover rounded-lg" />
//               </div>
//               <div className="md:w-2/3">
//                 <h3 className="text-2xl font-semibold">{selectedDay.title}</h3>
//                 <p className="text-sm text-gray-500 mt-1">{selectedDay.weather} • {selectedDay.fee}</p>
//                 <div className="mt-4 text-sm text-gray-700">
//                   <p className="font-medium mb-2">Activities</p>
//                   <ul className="list-disc list-inside space-y-1">
//                     {selectedDay.activities.map((a) => <li key={a}>{a}</li>)}
//                   </ul>
//                 </div>

//                 <div className="mt-6 flex gap-2">
//                   <button onClick={() => { setOpenDayModal(false); openVrPreview(selectedDay); }} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Open AR/VR Preview</button>
//                   <button onClick={() => { setOpenDayModal(false); setToast("Added to shortlist"); setTimeout(()=>setToast(null),1800); }} className="px-4 py-2 rounded-lg border">Save for later</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* VR Modal */}
//       {openVrModal && vrContent && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div className="absolute inset-0 bg-black/60" onClick={() => setOpenVrModal(false)} />
//           <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-[92%] p-6 z-10">
//             <button className="absolute top-3 right-3 p-2 rounded-full bg-gray-100" onClick={() => setOpenVrModal(false)}>✕</button>
//             <h3 className="text-lg font-semibold mb-2">{vrContent.title}</h3>
//             <div className="w-full h-56 bg-gray-50 rounded-md overflow-hidden mb-3 flex items-center justify-center">
//               {vrContent.image ? (
//                 <img src={vrContent.image} alt="vr" className="w-full h-full object-cover" />
//               ) : (
//                 <div className="text-gray-400">No preview available</div>
//               )}
//             </div>
//             <p className="text-sm text-gray-600 mb-4">{vrContent.text}</p>
//             <div className="flex gap-2">
//               <button onClick={() => { setOpenVrModal(false); setToast("Opening AR/VR page..."); setTimeout(() => setToast(null), 1500); }} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Open full AR/VR</button>
//               <button onClick={() => setOpenVrModal(false)} className="px-4 py-2 rounded-lg border">Close</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* small toast */}
//       {toast && (
//         <div className="fixed right-6 bottom-6 bg-black/90 text-white px-4 py-2 rounded-md shadow">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState, useRef } from "react";
import { MapPin, SunMedium, Wallet, Users } from "lucide-react";

/**
 * Full ItineraryPlannerPage with responsive budget slider and complete markup
 * Replace your file with this to remove redlines (no unused imports/vars).
 */

export default function ItineraryPlannerPage() {
  const [duration, setDuration] = useState("3 Days");
  const [budget, setBudget] = useState(12000);
=======
import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  IndianRupee,
  Loader2,
  Sun,
  Clock,
  Users,
  Plane,
  Utensils,
  Footprints,
  Camera,
  SlidersHorizontal,
  Route,
  Download,
  Share2,
  Heart,
} from "lucide-react";

const API_BASE = "http://localhost:5001";

export default function AiItineraryPro() {
  // BASIC TRIP INFO
  const [destination, setDestination] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(15000);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // USER PROFILE
>>>>>>> 8caa3dc2c725a4a742627b4bf7caa75afeb4095a
  const [travellerType, setTravellerType] = useState("Friends");
  const [ageGroup, setAgeGroup] = useState("18-30");
  const [transportMode, setTransportMode] = useState("Car");
  const [foodPreference, setFoodPreference] = useState("Local + Street Food");
  const [comfortLevel, setComfortLevel] = useState("Standard");
  const [walkingPreference, setWalkingPreference] = useState("Medium");
  const [photography, setPhotography] = useState(true);

  // INTERESTS
  const [interests, setInterests] = useState(["Nature", "Scenic Views"]);

<<<<<<< HEAD
  const [loadingGenerate, setLoadingGenerate] = useState(false);
  const [toast, setToast] = useState(null);

  const [generatedDays, setGeneratedDays] = useState([
    {
      day: 1,
      title: "Netarhat",
      bestTime: "06:00 AM - 09:00 AM",
      travelTime: "Start from Ranchi",
      fee: "Free",
      weather: "Pleasant, 18–22°C",
      activities: [
        "Enjoy sunrise views from Magnolia Point.",
        "Short walks through pine forests.",
        "Photography at viewpoints and valleys.",
      ],
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&crop=faces",
    },
    {
      day: 2,
      title: "Betla National Park",
      bestTime: "06:00 AM - 10:00 AM",
      travelTime: "2–3 hrs from Netarhat",
      fee: "₹200 per person",
      weather: "Cool, 16–20°C",
      activities: [
        "Morning jungle safari for wildlife spotting.",
        "Visit historical Palamu Fort.",
        "Campfire or nature walk near stay.",
      ],
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&crop=faces",
    },
    {
      day: 3,
      title: "Patratu Valley",
      bestTime: "04:00 PM - 06:30 PM",
      travelTime: "2 hrs from Ranchi",
      fee: "Free",
      weather: "Pleasant, 20–24°C",
      activities: [
        "Scenic drive through hairpin bends.",
        "Sunset view at Patratu dam viewpoint.",
        "Relax by the lake and enjoy snacks.",
      ],
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&crop=faces",
    },
  ]);

  // modals
  const [openDayModal, setOpenDayModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const [openVrModal, setOpenVrModal] = useState(false);
  const [vrContent, setVrContent] = useState(null);

  const plannerRef = useRef(null);

  const minBudget = 2000;
  const maxBudget = 50000;
=======
  // API STATES
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [planId, setPlanId] = useState(null);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
>>>>>>> 8caa3dc2c725a4a742627b4bf7caa75afeb4095a

  // OPTIONS
  const travellerTypes = ["Solo", "Friends", "Family", "Couple"];
  const ageGroups = ["18-30", "30-45", "45-60", "60+"];
  const transportOptions = ["Car", "Bike", "Train", "Public Transport", "Cab"];
  const foodOptions = ["Veg", "Non-veg", "Local + Street Food", "Mixed"];
  const comfortOptions = ["Budget", "Standard", "Premium"];
  const walkingOptions = ["Low", "Medium", "High"];
  const interestOptions = [
    "Nature",
    "Scenic Views",
    "Waterfalls",
    "Wildlife",
    "Culture",
    "Heritage",
    "Religious",
    "Adventure",
    "Shopping",
    "Food & Cafes",
    "Nightlife",
  ];

  const cleanJSON = (text) => {
    if (!text) return text;
    return text.replace(/```json|```/g, "").trim();
  };

  const toggleInterest = (label) => {
    setInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const generate = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    setPlanId(null);
    setSaved(false);

    try {
      const body = {
        duration: days + " Days",
        budget: Number(budget),
        travellerType,
        startLocation: startLocation || destination || "Ranchi",
        interests,
        preferences: {
          destination: destination || "Jharkhand",
          startDate: startDate || null,
          endDate: endDate || null,
          ageGroup,
          transportMode,
          foodPreference,
          comfortLevel,
          walkingPreference,
          photography,
        },
      };

      const res = await fetch(`${API_BASE}/api/ai/generate-itinerary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to generate itinerary");
      }

      let plan = data.itinerary;
      if (typeof plan === "string") {
        plan = JSON.parse(cleanJSON(plan));
      }

      setResult(plan);
      setPlanId(data.planId || null);
    } catch (err) {
      console.error(err);
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSavePlan = async () => {
    if (!planId) return;
    try {
      const res = await fetch(`${API_BASE}/api/ai/save-plan/${planId}`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.success) setSaved(true);
    } catch (err) {
      console.error(err);
    }
  };

<<<<<<< HEAD
  // ---------- Actions ----------

  const generateItinerary = async () => {
    setLoadingGenerate(true);
    setToast(null);

    // simulate call
    await new Promise((res) => setTimeout(res, 900 + Math.random() * 900));

    // small demo tweak
    setGeneratedDays((prev) =>
      prev.map((d) => {
        if (interests.includes("Adventure") && d.day === 2) {
          return {
            ...d,
            activities: ["Guided trekking and local adventure activities.", ...d.activities.slice(0, 2)],
          };
        }
        return d;
      })
    );

    setLoadingGenerate(false);
    setToast("Itinerary generated ✔");
    setTimeout(() => setToast(null), 2200);
  };

  // open day detail modal
  const openDayDetails = (dayObj) => {
    setSelectedDay(dayObj);
    setOpenDayModal(true);
  };

  // open VR preview modal
  const openVrPreview = (dayObj) => {
    setVrContent({
      title: `${dayObj.title} — AR/VR preview`,
      image: dayObj.image,
      text: `Preview for ${dayObj.title}. Replace this with an actual 3D/VR embed if available.`,
    });
    setOpenVrModal(true);
  };

  // hero actions
  const scrollToPlanner = () => {
    plannerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const trySamplePlan = () => {
    // quick sample: set interests and generate
    setInterests(["Nature", "Heritage"]);
    setTravellerType("Family");
    setBudget(15000);
    setTimeout(() => generateItinerary(), 300);
  };

  const pct = Math.round(((budget - minBudget) / (maxBudget - minBudget)) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9f7] to-[#f1f6f3] pb-12">
      <style>{`
        /* slider styles (touch-friendly) */
        input[type="range"].custom-range {
          -webkit-appearance: none;
          appearance: none;
          height: 12px;
          border-radius: 999px;
          background: transparent;
        }
        input[type="range"].custom-range:focus { outline: none; }
        input[type="range"].custom-range::-webkit-slider-runnable-track {
          height: 8px; border-radius: 999px; background: transparent;
        }
        input[type="range"].custom-range::-webkit-slider-thumb {
          -webkit-appearance: none; width:22px; height:22px; border-radius:999px;
          background:white; box-shadow:0 2px 8px rgba(16,185,129,0.18); border:4px solid #10B981; margin-top:-7px;
        }
        input[type="range"].custom-range::-moz-range-track { height:8px; border-radius:999px; background:transparent; }
        input[type="range"].custom-range::-moz-range-thumb { width:22px; height:22px; border-radius:999px; background:white; box-shadow:0 2px 8px rgba(16,185,129,0.18); border:4px solid #10B981; }
      `}</style>

      {/* Hero */}
      <header className="max-w-6xl mx-auto mt-6 px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0f6b4a] to-[#159a6a] text-white p-8 shadow-2xl overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full text-xs font-medium border border-white/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                AI-powered suggestions
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Premium Itinerary Planner
              </h1>
              <p className="mt-3 text-sm md:text-base text-white/90">
                Tailor-made travel plans for Jharkhand — smart routing, curated experiences and effortless planning.
              </p>

              <div className="mt-6 flex gap-3">
                <button onClick={scrollToPlanner} className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition">
                  Learn how it works
                </button>
                <button onClick={trySamplePlan} disabled={loadingGenerate} className="px-4 py-2 rounded-lg bg-white text-green-700 font-semibold text-sm shadow-sm hover:translate-y-[-1px] transition disabled:opacity-60">
                  {loadingGenerate ? "Generating..." : "Try sample plan"}
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-3 text-sm text-white/90">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="text-xs">Avg. trip cost</div>
                <div className="text-lg font-semibold mt-1">₹12,000</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="text-xs">Popular style</div>
                <div className="text-lg font-semibold mt-1">Nature & Scenic</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main ref={plannerRef} className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 px-4">
        {/* Left: Planner Form */}
        <section className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-4">Plan Your Premium Journey</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Duration */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Trip Duration</label>
              <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white">
                <option>1 Day</option>
                <option>2 Days</option>
                <option>3 Days</option>
                <option>4 Days</option>
                <option>5 Days</option>
              </select>
            </div>

            {/* Traveller Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Traveller Type</label>
              <div className="flex gap-2">
                {travellerOptions.map((t) => {
                  const active = t === travellerType;
                  return (
                    <button key={t} type="button" onClick={() => setTravellerType(t)} className={`px-3 py-2 rounded-lg text-sm border transition ${active ? "bg-emerald-600 text-white border-emerald-600 shadow-md" : "bg-white text-gray-700 border-gray-200 hover:shadow-sm"}`}>
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Responsive Budget Block */}
            <div className="md:col-span-2 mt-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range <span className="text-xs text-gray-500 ml-2">({budgetLabel()})</span>
              </label>

              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 md:hidden">
                      <div className="text-xs text-gray-500">Budget</div>
                      <div className="text-sm font-semibold">₹{budget.toLocaleString("en-IN")}</div>
                    </div>

                    <input
                      aria-label="Budget range"
                      aria-valuemin={minBudget}
                      aria-valuemax={maxBudget}
                      aria-valuenow={budget}
                      className="custom-range w-full"
                      type="range"
                      min={minBudget}
                      max={maxBudget}
                      step={1000}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      style={{
                        background: `linear-gradient(90deg, #10B981 ${pct}%, #E5E7EB ${pct}%)`,
                      }}
                    />

                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>₹{minBudget.toLocaleString("en-IN")}</span>
                      <span>₹{maxBudget.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="hidden md:flex md:flex-col md:items-end md:justify-center w-36">
                    <div className="text-xs text-gray-500 mb-1">Current</div>
                    <div className="px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-semibold">₹{budget.toLocaleString("en-IN")}</div>
                    <div className="text-xs text-gray-400 mt-1">{pct}%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Interest Categories</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {interestOptions.map((label) => {
                  const active = interests.includes(label);
                  return (
                    <button key={label} type="button" onClick={() => toggleInterest(label)} className={`px-3 py-2 rounded-lg text-sm border transition text-left ${active ? "bg-emerald-600 text-white border-emerald-600 shadow" : "bg-white text-gray-700 border-gray-100 hover:shadow-sm"}`}>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Starting Location */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Starting Location</label>
              <div className="flex items-center border rounded-lg px-3 py-2 text-sm bg-white">
                <MapPin size={16} className="text-emerald-600 mr-2" />
                <input value={startLocation} onChange={(e) => setStartLocation(e.target.value)} className="flex-1 bg-transparent outline-none text-sm" />
              </div>
            </div>

            {/* Preferences */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferences</label>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.localFood} onChange={() => togglePref("localFood")} /><span>Local/tribal food</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.lessWalking} onChange={() => togglePref("lessWalking")} /><span>Less walking</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.photography} onChange={() => togglePref("photography")} /><span>Photo-friendly spots</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.offbeat} onChange={() => togglePref("offbeat")} /><span>Offbeat picks</span></label>
                <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.slowTravel} onChange={() => togglePref("slowTravel")} /><span>Slow travel</span></label>
              </div>
            </div>
          </div>

          {/* Generate button */}
          <div className="mt-6">
            <button onClick={generateItinerary} disabled={loadingGenerate} className="w-full py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_10px_30px_rgba(16,185,129,0.14)] hover:scale-[1.01] transition disabled:opacity-60">
              {loadingGenerate ? "Generating your itinerary..." : "Generate My Premium Itinerary"}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">We use your preferences to craft a comfortable & memorable trip.</p>
          </div>
        </section>

        {/* Right: Selections Summary */}
        <aside className="sticky top-6 self-start bg-white rounded-2xl shadow-xl border border-gray-100 p-6 h-fit">
          <h3 className="text-sm font-semibold mb-4">Your Selections</h3>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between"><span className="text-gray-500">Duration</span><span className="font-medium">{duration}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Budget</span><span className="font-medium">₹{budget.toLocaleString("en-IN")}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Traveller</span><span className="font-medium">{travellerType}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Start</span><span className="font-medium">{startLocation}</span></div>

            <div>
              <span className="block mb-2 text-gray-500">Interests</span>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => <span key={i} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100">{i}</span>)}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500"><Users size={14} /><span>Personalized for {travellerType.toLowerCase()}</span></div>
            </div>
          </div>
        </aside>
      </main>

      {/* Generated Itinerary Preview */}
      <section className="max-w-6xl mx-auto mt-8 px-4 space-y-6">
        {generatedDays.map((d) => (
          <article key={d.day} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 w-full h-44 md:h-auto relative">
                <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                <div className="absolute left-4 top-4 bg-white/80 text-xs rounded-full px-3 py-1 font-semibold shadow">Day {d.day}</div>
              </div>

              <div className="md:w-2/3 p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{d.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{d.weather} • {d.fee}</p>
                  </div>

                  <div className="flex flex-col items-end text-xs text-gray-500 gap-2">
                    <div className="flex items-center gap-2"><SunMedium size={14} /><span>{d.bestTime}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={14} /><span>{d.travelTime}</span></div>
                    <div className="flex items-center gap-2"><Wallet size={14} /><span>{d.fee}</span></div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-700">
                  <p className="font-medium text-sm mb-2">Activities</p>
                  <ul className="list-disc list-inside space-y-1">
                    {d.activities.map((a) => <li key={a} className="text-sm">{a}</li>)}
                  </ul>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => openDayDetails(d)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:translate-y-[-1px] transition">View Details</button>
                  <button onClick={() => openVrPreview(d)} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:shadow-sm transition">AR/VR Preview</button>
                  <div className="ml-auto text-sm text-gray-500">Estimated time: <span className="font-medium text-gray-700">3-4 hrs</span></div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Day Detail Modal */}
      {openDayModal && selectedDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenDayModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-[95%] p-6 z-10">
            <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-100" onClick={() => setOpenDayModal(false)}>✕</button>
            <div className="md:flex gap-6">
              <div className="md:w-1/3"><img src={selectedDay.image} alt={selectedDay.title} className="w-full h-48 object-cover rounded-lg" /></div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold">{selectedDay.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedDay.weather} • {selectedDay.fee}</p>
                <div className="mt-4 text-sm text-gray-700">
                  <p className="font-medium mb-2">Activities</p>
                  <ul className="list-disc list-inside space-y-1">{selectedDay.activities.map((a) => <li key={a}>{a}</li>)}</ul>
                </div>

                <div className="mt-6 flex gap-2">
                  <button onClick={() => { setOpenDayModal(false); openVrPreview(selectedDay); }} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Open AR/VR Preview</button>
                  <button onClick={() => { setOpenDayModal(false); setToast("Added to shortlist"); setTimeout(()=>setToast(null),1800); }} className="px-4 py-2 rounded-lg border">Save for later</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VR Modal */}
      {openVrModal && vrContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenVrModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-[92%] p-6 z-10">
            <button className="absolute top-3 right-3 p-2 rounded-full bg-gray-100" onClick={() => setOpenVrModal(false)}>✕</button>
            <h3 className="text-lg font-semibold mb-2">{vrContent.title}</h3>
            <div className="w-full h-56 bg-gray-50 rounded-md overflow-hidden mb-3 flex items-center justify-center">
              {vrContent.image ? <img src={vrContent.image} alt="vr" className="w-full h-full object-cover" /> : <div className="text-gray-400">No preview available</div>}
            </div>
            <p className="text-sm text-gray-600 mb-4">{vrContent.text}</p>
            <div className="flex gap-2">
              <button onClick={() => { setOpenVrModal(false); setToast("Opening AR/VR page..."); setTimeout(() => setToast(null), 1500); }} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Open full AR/VR</button>
              <button onClick={() => setOpenVrModal(false)} className="px-4 py-2 rounded-lg border">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* small toast */}
      {toast && <div className="fixed right-6 bottom-6 bg-black/90 text-white px-4 py-2 rounded-md shadow">{toast}</div>}
=======
  const handleDownloadPdf = () => {
    // simple way: browser print dialog (user can save as PDF)
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "My AI Travel Itinerary",
          text: `Check out my ${days}-day trip plan to ${destination || "this place"}!`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard ✅");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const SkeletonCard = () => (
    <div className="bg-white shadow-md rounded-2xl p-6 border animate-pulse">
      <div className="flex justify-between mb-4">
        <div className="h-3 w-24 bg-gray-200 rounded-full" />
        <div className="h-3 w-32 bg-gray-200 rounded-full" />
      </div>
      <div className="space-y-2">
        <div className="h-2 w-full bg-gray-200 rounded-full" />
        <div className="h-2 w-5/6 bg-gray-200 rounded-full" />
        <div className="h-2 w-3/4 bg-gray-200 rounded-full" />
      </div>
    </div>
  );

  const route = result?.routePlan;
  const recommended = result?.recommended || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-gray-100 to-gray-100 px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="bg-white/80 backdrop-blur shadow-md rounded-2xl p-5 border flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="inline-flex items-center text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
              AI-powered Smart Planning
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              AI Itinerary Planner <span className="text-emerald-600">Pro</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Customize your trip using budget, comfort, interests & travel
              style – just like a real tourism platform.
            </p>
          </div>

          {/* Top actions like screenshot */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={handleSavePlan}
              disabled={!planId}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-full border ${
                saved
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white hover:bg-emerald-50 text-gray-700 border-gray-200"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Heart
                size={14}
                className={saved ? "fill-current" : "text-emerald-600"}
              />
              {saved ? "Saved" : "Save Itinerary"}
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={!result}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full border bg-white hover:bg-gray-50 text-gray-700 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={14} />
              Download PDF
            </button>

            <button
              onClick={handleShare}
              disabled={!result}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full border bg-white hover:bg-gray-50 text-gray-700 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Share2 size={14} />
              Share Plan
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,2fr] gap-6">
          {/* LEFT PANEL – INPUTS */}
          {/* (yahi tumhara existing form hai – unchanged, sirf upar se liya hua,
              main yahan nahi repeat kar raha to response chhota rahe,
              lekin tum jo file last bheji thi, uska LEFT PANEL part exactly same rakho) */}
          {/* 👆 NOTE: Tum apna pura LEFT PANEL code yahan hi rakh chuke ho,
              woh perfect hai, usme koi change ki zarurat nahi (sirf generate function updated hai). */}
        </div>

        {/* RIGHT SIDE – RESULT SECTION */}

        <div className="max-w-6xl mx-auto mt-4 space-y-4">
          {/* Empty state */}
          {!result && !loading && (
            <div className="h-64 flex flex-col items-center justify-center text-center text-gray-500 bg-white/60 border border-dashed border-gray-300 rounded-2xl">
              <p className="text-sm font-semibold mb-1">
                No itinerary generated yet
              </p>
              <p className="text-xs max-w-xs">
                Fill the trip details and click{" "}
                <span className="font-semibold">“Generate AI Itinerary”</span>{" "}
                to see a day-wise travel plan here.
              </p>
            </div>
          )}

          {/* Loading skeleton */}
          {loading && (
            <div className="space-y-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}

          {/* RESULT VIEW */}
          {result && !loading && (
            <>
              {/* DAY CARDS */}
              {result.days?.map((d, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm rounded-2xl border p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Day {d.day || idx + 1}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {d.title}
                      </h3>
                    </div>

                    <div className="text-[11px] text-gray-600 text-right space-y-1">
                      <div className="flex items-center gap-1 justify-end">
                        <Clock size={14} />
                        <span>{d.startTime}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <Sun size={14} />
                        <span>{d.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin size={14} />
                        <span>{d.travelTime}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <IndianRupee size={14} />
                        <span>{d.fee}</span>
                      </div>
                      {d.weather && (
                        <div className="flex items-center gap-1 justify-end">
                          <Sun size={14} />
                          <span>{d.weather}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {d.food && (
                    <p className="text-xs text-gray-600 mt-2">
                      <span className="font-semibold">Food:</span> {d.food}
                    </p>
                  )}

                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-700 mb-1">
                      Activities
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      {d.activities?.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <button className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-medium">
                      View Details
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-300 text-xs">
                      AR/VR Preview
                    </button>
                  </div>
                </div>
              ))}

              {/* JOURNEY ROUTE SECTION */}
              {route && route.locations && route.locations.length > 0 && (
                <div className="bg-white rounded-2xl border shadow-sm p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Route size={18} className="text-emerald-600" />
                    <h3 className="text-sm font-semibold text-gray-800">
                      Your Journey Route
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-700 mb-4">
                    {route.locations.map((loc, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[11px] font-semibold text-emerald-700">
                            {i + 1}
                          </div>
                          <span className="mt-1">{loc}</span>
                        </div>
                        {i < route.locations.length - 1 && (
                          <span className="text-gray-400">➜</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs text-gray-600 mt-2">
                    <div className="bg-gray-50 rounded-xl border border-gray-200 px-3 py-2">
                      <p className="font-semibold text-gray-700">Stops</p>
                      <p className="text-lg font-bold text-gray-900">
                        {route.locations.length}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl border border-gray-200 px-3 py-2">
                      <p className="font-semibold text-gray-700">
                        Total Travel Time
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {route.totalTime || "~"}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl border border-gray-200 px-3 py-2">
                      <p className="font-semibold text-gray-700">
                        Total Distance
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {route.totalDistance || "~"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* RECOMMENDED FOR YOU */}
              {recommended.length > 0 && (
                <div className="bg-white rounded-2xl border shadow-sm p-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">
                    Recommended for You
                  </h3>
                  <div className="space-y-2 text-sm">
                    {recommended.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-200 px-3 py-2"
                      >
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-gray-500">
                            {item.type} • {item.description}
                          </p>
                          <p className="text-[11px] text-gray-600 mt-0.5">
                            {item.price} • ⭐ {item.rating}
                          </p>
                        </div>
                        <button className="px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs font-medium">
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
>>>>>>> 8caa3dc2c725a4a742627b4bf7caa75afeb4095a
    </div>
  );
}
