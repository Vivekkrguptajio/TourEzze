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
} from "lucide-react";

const API_BASE = "http://localhost:5001"; // apna backend yahan set karo

export default function AiItineraryPro() {
  // BASIC TRIP INFO
  const [destination, setDestination] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(15000);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // USER PROFILE
  const [travellerType, setTravellerType] = useState("Friends");
  const [ageGroup, setAgeGroup] = useState("18-30");
  const [transportMode, setTransportMode] = useState("Car");
  const [foodPreference, setFoodPreference] = useState("Local + Street Food");
  const [comfortLevel, setComfortLevel] = useState("Standard");
  const [walkingPreference, setWalkingPreference] = useState("Medium");
  const [photography, setPhotography] = useState(true);

  // INTERESTS
  const [interests, setInterests] = useState(["Nature", "Scenic Views"]);

  // API STATES
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

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
      prev.includes(label)
        ? prev.filter((i) => i !== label)
        : [...prev, label]
    );
  };

  const generate = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const body = {
        // backend ke hisab se still simple, but data zyada rich
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
    } catch (err) {
      console.error(err);
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-gray-100 to-gray-100 px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="bg-white/80 backdrop-blur shadow-md rounded-2xl p-5 border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="inline-flex items-center text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
              AI-powered Smart Planning
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              AI Itinerary Planner <span className="text-emerald-600">Pro</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Customize your trip like an industry-grade travel engine – using
              budget, comfort level, interests & travel style.
            </p>
          </div>
          <div className="text-xs bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-600">
            <p className="font-semibold mb-1">Ideal for:</p>
            <ul className="space-y-0.5">
              <li>• Tourism portals / hackathons</li>
              <li>• Smart city travel assistants</li>
              <li>• SIH / Internity project integration</li>
            </ul>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,2fr] gap-6">
          {/* LEFT PANEL – INPUTS */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border space-y-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Trip Configuration
            </h2>
            <p className="text-xs text-gray-500 mb-3">
              Fill these details – AI will use them to build a realistic,
              budget-aware and personalized itinerary.
            </p>

            {/* Destination & Start */}
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Destination / Region
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <MapPin size={16} className="text-emerald-600" />
                  <input
                    className="ml-2 flex-1 bg-transparent outline-none text-sm"
                    placeholder="e.g., Jharkhand, Goa, Himachal..."
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Starting City
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <MapPin size={16} className="text-emerald-600" />
                  <input
                    className="ml-2 flex-1 bg-transparent outline-none text-sm"
                    placeholder="e.g., Ranchi"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Dates & Days */}
            <div className="grid md:grid-cols-[1.2fr,1.2fr,0.8fr] gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Start Date (optional)
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <Calendar size={16} className="text-emerald-600" />
                  <input
                    type="date"
                    className="ml-2 flex-1 bg-transparent outline-none text-xs"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  End Date (optional)
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <Calendar size={16} className="text-emerald-600" />
                  <input
                    type="date"
                    className="ml-2 flex-1 bg-transparent outline-none text-xs"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  No. of Days
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                  <Clock size={16} className="text-emerald-600" />
                  <input
                    type="number"
                    min={1}
                    className="ml-2 flex-1 bg-transparent outline-none text-sm"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value) || 1)}
                  />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Total Budget (₹)
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                <IndianRupee size={16} className="text-emerald-600" />
                <input
                  type="number"
                  className="ml-2 flex-1 bg-transparent outline-none text-sm"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value) || 0)}
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                AI will adjust stay, food and activities based on this budget.
              </p>
            </div>

            {/* Traveller & Profile */}
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Traveller Type
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {travellerTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTravellerType(t)}
                      className={`px-3 py-1.5 rounded-full border ${
                        travellerType === t
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      } flex items-center gap-1`}
                    >
                      <Users size={12} />
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Age Group
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {ageGroups.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAgeGroup(a)}
                      className={`px-3 py-1.5 rounded-full border ${
                        ageGroup === a
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Transport & Food */}
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Preferred Transport
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {transportOptions.map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setTransportMode(mode)}
                      className={`px-3 py-1.5 rounded-full border flex items-center gap-1 ${
                        transportMode === mode
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Plane size={12} />
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Food Preference
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {foodOptions.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFoodPreference(f)}
                      className={`px-3 py-1.5 rounded-full border flex items-center gap-1 ${
                        foodPreference === f
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Utensils size={12} />
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Comfort, Walking, Photography */}
            <div className="grid md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Comfort Level
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {comfortOptions.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setComfortLevel(c)}
                      className={`px-3 py-1.5 rounded-full border flex items-center gap-1 ${
                        comfortLevel === c
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <SlidersHorizontal size={12} />
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Walking Preference
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {walkingOptions.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWalkingPreference(w)}
                      className={`px-3 py-1.5 rounded-full border flex items-center gap-1 ${
                        walkingPreference === w
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Footprints size={12} />
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Photography Focus
                </label>
                <button
                  type="button"
                  onClick={() => setPhotography((p) => !p)}
                  className={`px-3 py-2 rounded-full border w-full flex items-center justify-center gap-2 text-xs ${
                    photography
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <Camera size={14} />
                  {photography ? "High priority for photos" : "Normal"}
                </button>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Interests (select multiple)
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                {interestOptions.map((label) => {
                  const active = interests.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggleInterest(label)}
                      className={`px-3 py-1.5 rounded-full border ${
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

            {/* BUTTON + ERROR */}
            {error && (
              <p className="text-xs text-red-500 border border-red-100 bg-red-50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              onClick={generate}
              disabled={loading}
              className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Generating itinerary..." : "Generate AI Itinerary"}
            </button>
          </div>

          {/* RIGHT PANEL – RESULT */}
          <div className="min-h-[420px] space-y-4">
            {/* Empty state */}
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 bg-white/60 border border-dashed border-gray-300 rounded-2xl">
                <p className="text-sm font-semibold mb-1">
                  No itinerary generated yet
                </p>
                <p className="text-xs max-w-xs">
                  Fill the trip details on the left and click{" "}
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

            {/* Result */}
            {result && !loading && (
              <div className="space-y-4">
                {/* SUMMARY */}
                <div className="bg-white shadow-md rounded-2xl p-6 border">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">
                        AI Trip Summary
                      </p>
                      <h2 className="text-xl font-bold text-gray-800">
                        {destination || "Your Trip"} • {days} Days
                      </h2>
                      <p className="text-xs text-gray-500 mt-1">
                        {travellerType} • {ageGroup} • {transportMode}
                      </p>
                      <p className="text-sm text-gray-700 mt-3">
                        {result.summary}
                      </p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 text-sm text-emerald-800 min-w-[180px]">
                      <p className="font-semibold mb-1">Estimated Budget</p>
                      <p className="text-lg font-bold text-emerald-700">
                        {result.overallBudget || `₹${budget.toLocaleString("en-IN")}`}
                      </p>
                      <p className="text-[11px] text-emerald-900 mt-2">
                        Walking: {walkingPreference} • Comfort: {comfortLevel}
                      </p>
                    </div>
                  </div>

                  {result.weather && (
                    <p className="text-xs text-gray-500 mt-3">
                      Approx Weather: {result.weather}
                    </p>
                  )}
                </div>

                {/* DAY-WISE CARDS */}
                {result.days?.map((d, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <p className="text-xs text-gray-500">Day {d.day}</p>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {d.title}
                        </h3>
                      </div>

                      <div className="text-xs space-y-1 text-right text-gray-600">
                        <div className="flex items-center gap-1 justify-end">
                          <Sun size={14} />
                          <span>{d.bestTime}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <Clock size={14} />
                          <span>{d.travelTime}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <IndianRupee size={14} />
                          <span>{d.fee}</span>
                        </div>
                      </div>
                    </div>

                    {d.weather && (
                      <p className="text-xs mt-2 text-gray-500">
                        Weather: {d.weather}
                      </p>
                    )}

                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 text-sm">
                      {d.activities?.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
