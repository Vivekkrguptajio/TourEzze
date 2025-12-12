import React, { useState } from "react";
<<<<<<< HEAD
import { Loader2 } from "lucide-react";
=======
import {
  Loader2,
} from "lucide-react";
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

import PlannerHeader from "./PlannerHeader";
import PlannerLeftPanel from "./PlannerLeftPanel";
import PlannerRightPanel from "./PlannerRightPanel";
<<<<<<< HEAD
import { API_URL } from "../../../../../../src/api.js";
=======

const API_BASE = "http://localhost:5000";
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

export default function AiItineraryPro() {
  // BASIC TRIP INFO (shared states)
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

  const [interests, setInterests] = useState(["Nature", "Scenic Views"]);

  // API STATES
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [planId, setPlanId] = useState(null);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const cleanJSON = (text) => text?.replace(/```json|```/g, "").trim();

  const generate = async () => {
    setLoading(true);
    setError("");
    setSaved(false);
    setResult(null);

    try {
      const body = {
        duration: days + " Days",
        budget,
        travellerType,
        startLocation: startLocation || destination || "Ranchi",
        interests,
        preferences: {
          destination,
          startDate,
          endDate,
          ageGroup,
          transportMode,
          foodPreference,
          comfortLevel,
          walkingPreference,
          photography,
        },
      };

<<<<<<< HEAD
      const res = await fetch(`${API_URL}/api/ai/generate-itinerary`, {
=======
      const res = await fetch(`${API_BASE}/api/ai/generate-itinerary`, {
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

<<<<<<< HEAD
      let plan =
        typeof data.itinerary === "string"
          ? JSON.parse(cleanJSON(data.itinerary))
          : data.itinerary;
=======
      let plan = typeof data.itinerary === "string"
        ? JSON.parse(cleanJSON(data.itinerary))
        : data.itinerary;
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e

      setPlanId(data.planId);
      setResult(plan);
    } catch (err) {
      setError("Failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSavePlan = async () => {
    if (!planId) return;

    try {
<<<<<<< HEAD
      const res = await fetch(`${API_URL}/api/ai/save-plan/${planId}`, {
=======
      const res = await fetch(`${API_BASE}/api/ai/save-plan/${planId}`, {
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        method: "POST",
      });
      const data = await res.json();
      if (data.success) setSaved(true);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        {/* HEADER */}
        <PlannerHeader
          saved={saved}
          handleSavePlan={handleSavePlan}
          disabledSave={!planId}
          hasResult={!!result}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,2fr] gap-6">
<<<<<<< HEAD
=======

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
          {/* LEFT PANEL */}
          <PlannerLeftPanel
            {...{
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
<<<<<<< HEAD

=======
              
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
              photography,
              interests,
            }}
            setDestination={setDestination}
            setStartLocation={setStartLocation}
            setDays={setDays}
            setBudget={setBudget}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTravellerType={setTravellerType}
            setAgeGroup={setAgeGroup}
            setTransportMode={setTransportMode}
            setFoodPreference={setFoodPreference}
            setComfortLevel={setComfortLevel}
            setWalkingPreference={setWalkingPreference}
            setPhotography={setPhotography}
            setInterests={setInterests}
            interestsList={[
<<<<<<< HEAD
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
=======
              "Nature","Scenic Views","Waterfalls","Wildlife","Culture",
              "Heritage","Religious","Adventure","Shopping","Food & Cafes","Nightlife",
>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
            ]}
            generate={generate}
            loading={loading}
            error={error}
          />

          {/* RIGHT PANEL */}
<<<<<<< HEAD
          <PlannerRightPanel result={result} loading={loading} />
=======
          <PlannerRightPanel
            result={result}
            loading={loading}
          />

>>>>>>> 8fc040de90414307da0fa677067b8a8dd1cdea0e
        </div>
      </div>
    </div>
  );
}
