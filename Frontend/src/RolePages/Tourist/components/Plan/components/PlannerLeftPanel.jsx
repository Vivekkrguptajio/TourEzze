import React from "react";
import {
  MapPin,
  Calendar,
  IndianRupee,
  Users,
  Plane,
  Utensils,
  Footprints,
  Camera,
  SlidersHorizontal,
  Clock,
  Loader2,
} from "lucide-react";

export default function PlannerLeftPanel({
  destination,
  startLocation,
  days,
  budget,
  startDate,
  endDate,
  travellerType,
  ageGroup,
  transportMode,
  foodPreference,
  comfortLevel,
  walkingPreference,
  photography,
  interests,

  setDestination,
  setStartLocation,
  setDays,
  setBudget,
  setStartDate,
  setEndDate,
  setTravellerType,
  setAgeGroup,
  setTransportMode,
  setFoodPreference,
  setComfortLevel,
  setWalkingPreference,
  setPhotography,
  setInterests,

  interestsList,
  generate,
  loading,
  error,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-5">

      <h2 className="text-lg font-semibold text-gray-800">Trip Configuration</h2>
      <p className="text-xs text-gray-500">
        Fill details to generate a personalized AI itinerary.
      </p>

      {/* DESTINATION + START */}
      <div className="grid grid-cols-2 gap-4">
        
        <div>
          <label className="text-xs font-medium">Destination</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <MapPin size={16} className="text-emerald-600" />
            <input
              className="ml-2 flex-1 bg-transparent text-sm outline-none"
              placeholder="Jharkhand / Goa / Himachal"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium">Starting Location</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <MapPin size={16} className="text-emerald-600" />
            <input
              className="ml-2 flex-1 bg-transparent text-sm outline-none"
              placeholder="Ranchi / Patna / Delhi"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
          </div>
        </div>

      </div>

      {/* DATES */}
      <div className="grid grid-cols-3 gap-4">

        <div>
          <label className="text-xs font-medium">Start Date</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <Calendar size={16} className="text-emerald-600" />
            <input
              type="date"
              className="ml-2 bg-transparent flex-1 outline-none text-xs"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium">End Date</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <Calendar size={16} className="text-emerald-600" />
            <input
              type="date"
              className="ml-2 bg-transparent flex-1 outline-none text-xs"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium">Days</label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <Clock size={16} className="text-emerald-600" />
            <input
              type="number"
              min={1}
              className="ml-2 flex-1 bg-transparent outline-none text-sm"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* BUDGET */}
      <div>
        <label className="text-xs font-medium">Budget (₹)</label>
        <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
          <IndianRupee size={16} className="text-emerald-600" />
          <input
            type="number"
            className="ml-2 flex-1 bg-transparent outline-none text-sm"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
      </div>

      {/* TRAVELLER */}
      <div>
        <label className="text-xs font-medium">Traveller Type</label>
        <div className="flex gap-2 flex-wrap mt-1 text-xs">
          {["Solo", "Friends", "Family", "Couple"].map((t) => (
            <button
              key={t}
              onClick={() => setTravellerType(t)}
              className={`px-3 py-1.5 rounded-full border ${
                travellerType === t
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <Users size={12} className="inline mr-1" /> {t}
            </button>
          ))}
        </div>
      </div>

      {/* AGE GROUP */}
      <div>
        <label className="text-xs font-medium">Age Group</label>
        <div className="flex gap-2 flex-wrap mt-1 text-xs">
          {["18-30", "30-45", "45-60", "60+"].map((age) => (
            <button
              key={age}
              onClick={() => setAgeGroup(age)}
              className={`px-3 py-1.5 rounded-full border ${
                ageGroup === age
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {age}
            </button>
          ))}
        </div>
      </div>

      {/* TRANSPORT */}
      <div>
        <label className="text-xs font-medium">Preferred Transport</label>
        <div className="flex gap-2 flex-wrap mt-1 text-xs">
          {["Car", "Bike", "Train", "Public Transport", "Cab"].map((mode) => (
            <button
              key={mode}
              onClick={() => setTransportMode(mode)}
              className={`px-3 py-1.5 rounded-full border flex items-center gap-1 ${
                transportMode === mode
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <Plane size={12} /> {mode}
            </button>
          ))}
        </div>
      </div>

      {/* FOOD */}
      <div>
        <label className="text-xs font-medium">Food Preference</label>
        <div className="flex gap-2 flex-wrap mt-1 text-xs">
          {["Veg", "Non-veg", "Local + Street Food", "Mixed"].map((f) => (
            <button
              key={f}
              onClick={() => setFoodPreference(f)}
              className={`px-3 py-1.5 rounded-full border flex items-center gap-1 ${
                foodPreference === f
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <Utensils size={12} /> {f}
            </button>
          ))}
        </div>
      </div>

      {/* COMFORT */}
      <div>
        <label className="text-xs font-medium">Comfort Level</label>
        <div className="flex gap-2 flex-wrap mt-1 text-xs">
          {["Budget", "Standard", "Premium"].map((c) => (
            <button
              key={c}
              onClick={() => setComfortLevel(c)}
              className={`px-3 py-1.5 rounded-full border ${
                comfortLevel === c
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <SlidersHorizontal size={12} /> {c}
            </button>
          ))}
        </div>
      </div>

      {/* WALKING */}
      <div>
        <label className="text-xs font-medium">Walking Preference</label>
        <div className="flex gap-2 flex-wrap mt-1 text-xs">
          {["Low", "Medium", "High"].map((w) => (
            <button
              key={w}
              onClick={() => setWalkingPreference(w)}
              className={`px-3 py-1.5 rounded-full border ${
                walkingPreference === w
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <Footprints size={12} /> {w}
            </button>
          ))}
        </div>
      </div>

      {/* PHOTOGRAPHY */}
      <div>
        <label className="text-xs font-medium">Photography Focus</label>
        <button
          onClick={() => setPhotography(!photography)}
          className={`mt-1 px-3 py-2 rounded-full border w-full flex justify-center items-center gap-2 text-xs ${
            photography
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <Camera size={14} /> {photography ? "High Priority" : "Normal"}
        </button>
      </div>

      {/* INTERESTS */}
      <div>
        <label className="text-xs font-medium">Interests</label>
        <div className="flex gap-2 flex-wrap mt-2 text-xs">
          {interestsList.map((label) => (
            <button
              key={label}
              onClick={() =>
                setInterests((prev) =>
                  prev.includes(label)
                    ? prev.filter((x) => x !== label)
                    : [...prev, label]
                )
              }
              className={`px-3 py-1.5 rounded-full border ${
                interests.includes(label)
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-xs text-red-500 bg-red-50 border border-red-100 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      {/* GENERATE BUTTON */}
      <button
        onClick={generate}
        disabled={loading}
        className="w-full bg-emerald-600 text-white rounded-xl py-3 text-sm font-semibold hover:bg-emerald-700 flex items-center justify-center gap-2"
      >
        {loading && <Loader2 className="animate-spin" size={16} />}
        {loading ? "Generating..." : "Generate AI Itinerary"}
      </button>

    </div>
  );
}
