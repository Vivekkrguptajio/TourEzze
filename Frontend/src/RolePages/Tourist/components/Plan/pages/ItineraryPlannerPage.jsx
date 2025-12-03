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
  const [travellerType, setTravellerType] = useState("Friends");
  const [startLocation, setStartLocation] = useState("Ranchi");

  const [interests, setInterests] = useState(["Nature", "Waterfalls"]);
  const [prefs, setPrefs] = useState({
    localFood: true,
    lessWalking: false,
    photography: true,
    offbeat: false,
    slowTravel: false,
  });

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

  const interestOptions = [
    "Nature",
    "Culture",
    "Wildlife",
    "Religious",
    "Adventure",
    "Heritage",
    "Waterfalls",
    "Scenic Spots",
  ];

  const travellerOptions = ["Family", "Friends", "Solo", "Couple"];

  const toggleInterest = (label) => {
    setInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const togglePref = (key) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const budgetLabel = () => {
    const pct = (budget - minBudget) / (maxBudget - minBudget);
    if (pct < 0.33) return "Low budget";
    if (pct < 0.66) return "Moderate budget";
    return "High budget";
  };

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
    </div>
  );
}
