import React, { useState } from "react";
import { MapPin, SunMedium, Wallet, Users } from "lucide-react";

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
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : [...prev, label]
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

  const generatedDays = [
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
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f0] pb-10">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#147a55] to-[#1ea56e] text-white rounded-b-3xl shadow-md mx-auto max-w-6xl mt-4">
        <div className="px-8 py-10">
          <div className="inline-flex items-center text-xs font-medium bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-300 mr-2" />
            Powered by AI recommendations
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            AI Itinerary Planner
          </h1>
          <p className="text-sm md:text-base text-white/90 max-w-xl">
            Create a personalized travel plan based on your preferences, budget
            and travel style across Jharkhand.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6 px-4">
        {/* Left: Planner Form */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Plan Your Journey</h2>

          {/* Trip Duration */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trip Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option>1 Day</option>
              <option>2 Days</option>
              <option>3 Days</option>
              <option>4 Days</option>
              <option>5 Days</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">
                Budget Range
              </label>
              <span className="text-xs text-gray-500">{budgetLabel()}</span>
            </div>

            <div className="px-1">
              <input
                type="range"
                min={minBudget}
                max={maxBudget}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>₹{minBudget.toLocaleString("en-IN")}</span>
              <span className="font-semibold">
                ₹{budget.toLocaleString("en-IN")}
              </span>
              <span>₹{maxBudget.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Interest Categories */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Categories
            </label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {interestOptions.map((label) => {
                const active = interests.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleInterest(label)}
                    className={`px-3 py-2 rounded-lg border text-left ${
                      active
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Traveller Type */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Traveller Type
            </label>
            <div className="grid grid-cols-4 gap-2 text-sm">
              {travellerOptions.map((t) => {
                const active = t === travellerType;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTravellerType(t)}
                    className={`px-2 py-2 rounded-lg border ${
                      active
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Starting Location */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Starting Location
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 text-sm bg-gray-50">
              <MapPin size={16} className="text-emerald-600 mr-2" />
              <input
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Additional Preferences */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Preferences
            </label>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={prefs.localFood}
                  onChange={() => togglePref("localFood")}
                />
                <span>Local/tribal food experiences</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={prefs.lessWalking}
                  onChange={() => togglePref("lessWalking")}
                />
                <span>Less walking, more vehicle travel</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={prefs.photography}
                  onChange={() => togglePref("photography")}
                />
                <span>Photo-friendly spots & viewpoints</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={prefs.offbeat}
                  onChange={() => togglePref("offbeat")}
                />
                <span>Prefer offbeat, less crowded places</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={prefs.slowTravel}
                  onChange={() => togglePref("slowTravel")}
                />
                <span>Slow travel with relaxed schedule</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-sm">
            Generate My AI Itinerary
          </button>
          <p className="text-[11px] text-gray-500 mt-2 text-center">
            AI will adapt your interests, trip duration and budget to build the
            best route for you.
          </p>
        </div>

        {/* Right: Selections Summary */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 h-fit">
          <h3 className="text-sm font-semibold mb-4">Your Selections</h3>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Duration</span>
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Budget</span>
              <span className="font-medium">
                ₹{budget.toLocaleString("en-IN")} ({budgetLabel()})
              </span>
            </div>
            <div className="flex justify-between">
              <span>Traveller</span>
              <span className="font-medium">{travellerType}</span>
            </div>
            <div className="flex justify-between">
              <span>Start</span>
              <span className="font-medium">{startLocation}</span>
            </div>

            <div>
              <span className="block mb-1">Interests</span>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Itinerary Preview (simple) */}
      <div className="max-w-6xl mx-auto mt-8 px-4 space-y-4">
        {generatedDays.map((d) => (
          <div
            key={d.day}
            className="bg-white rounded-2xl shadow-sm border px-6 py-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500">Day {d.day}</p>
                <h3 className="text-lg font-semibold">{d.title}</h3>
              </div>
              <div className="flex gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <SunMedium size={14} />
                  <span>{d.bestTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{d.travelTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wallet size={14} />
                  <span>{d.fee}</span>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-700 mb-1">
                Activities
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {d.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 mt-3">
              <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm">
                View Details
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm">
                AR/VR Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
