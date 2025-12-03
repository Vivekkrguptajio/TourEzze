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
  const [planId, setPlanId] = useState(null);
  const [saved, setSaved] = useState(false);
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
    </div>
  );
}
