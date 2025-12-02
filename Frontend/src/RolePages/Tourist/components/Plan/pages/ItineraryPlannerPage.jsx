import React, { useState } from "react";
import { MapPin, Calendar, IndianRupee, Loader2, Sun, Clock } from "lucide-react";

const API_BASE = "http://localhost:5001";

export default function AiItineraryPro() {
  const [place, setPlace] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(15000);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const cleanJSON = (text) => {
    if (!text) return text;
    return text.replace(/```json|```/g, "").trim();
  };

  const generate = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const body = {
        duration: days + " Days",
        budget,
        travellerType: "Friends",
        startLocation: place || "Ranchi",
        interests: ["Nature"],
        preferences: { photography: true },
      };

      const res = await fetch(`${API_BASE}/api/ai/generate-itinerary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      let plan = data.itinerary;

      if (typeof plan === "string") {
        plan = JSON.parse(cleanJSON(plan));
      }

      setResult(plan);
    } catch (err) {
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr,2fr] gap-6">

        {/* LEFT PANEL */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            AI Itinerary Planner
          </h1>

          {/* Input — Place */}
          <label className="block text-sm font-medium text-gray-700 mb-1">Starting Place</label>
          <div className="flex items-center border rounded-lg px-3 py-2 mb-3 bg-gray-50">
            <MapPin size={18} className="text-green-600" />
            <input
              className="ml-2 flex-1 bg-transparent outline-none"
              placeholder="Enter a location..."
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>

          {/* Input — Days */}
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Days</label>
          <div className="flex items-center border rounded-lg px-3 py-2 mb-3 bg-gray-50">
            <Calendar size={18} className="text-green-600" />
            <input
              type="number"
              className="ml-2 flex-1 bg-transparent outline-none"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>

          {/* Input — Budget */}
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget (₹)</label>
          <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-50">
            <IndianRupee size={18} className="text-green-600" />
            <input
              type="number"
              className="ml-2 flex-1 bg-transparent outline-none"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            onClick={generate}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" size={20} />}
            {loading ? "Generating Itinerary..." : "Generate AI Plan"}
          </button>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </div>

        {/* RIGHT PANEL — AI RESULT */}
        <div className="min-h-[400px]">
          {!result && !loading && (
            <div className="text-gray-500 text-center pt-20">
              Enter details & click generate to see your AI-powered itinerary.
            </div>
          )}

          {loading && (
            <div className="text-center mt-20 text-gray-600 animate-pulse">
              Generating AI plan...
            </div>
          )}

          {result && (
            <div className="space-y-6">

              {/* SUMMARY CARD */}
              <div className="bg-white shadow-lg rounded-2xl p-6 border">
                <h2 className="text-xl font-bold text-gray-800">Trip Summary</h2>
                <p className="text-gray-700 mt-2">{result.summary}</p>

                <div className="mt-4 bg-green-50 p-3 rounded-xl border border-green-200">
                  <p className="text-sm font-semibold text-green-800">Estimated Budget</p>
                  <p className="text-lg font-bold text-green-700">{result.overallBudget}</p>
                </div>
              </div>

              {/* DAY WISE CARDS */}
              {result.days?.map((d, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Day {d.day}</p>
                      <h3 className="text-lg font-semibold">{d.title}</h3>
                    </div>

                    <div className="text-xs space-y-1 text-right">
                      <div className="flex items-center gap-1 justify-end">
                        <Sun size={14} /><span>{d.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <Clock size={14} /><span>{d.travelTime}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <IndianRupee size={14} /><span>{d.fee}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs mt-2 text-gray-500">Weather: {d.weather}</p>

                  <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 text-sm">
                    {d.activities?.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
