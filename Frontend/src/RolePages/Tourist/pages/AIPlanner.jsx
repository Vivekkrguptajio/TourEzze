import { useState } from "react";
import PlannerHeader from "../componentsAIPlanner/PlannerHeader.jsx";
import JourneyForm from "../componentsAIPlanner/JourneyForm.jsx";
import SelectedSummary from "../componentsAIPlanner/SelectedSummary.jsx";
import RecommendedServices from "../componentsAIPlanner/RecommendedServices.jsx";
import DayItineraryCard from "../componentsAIPlanner/DayItineraryCard.jsx";
import JourneyRoute from "../componentsAIPlanner/JourneyRoute.jsx";

export default function AIPlanner() {
  const [formData, setFormData] = useState({
    days: 3,
    budget: 10000,
    interests: ["Nature", "Waterfalls"]
  });

  return (
    <div className="bg-[#FAF7F1] min-h-screen">
      <PlannerHeader />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* FORM */}
          <JourneyForm formData={formData} setFormData={setFormData} />

         

          {/* 🟩🟩 DAY-WISE ITINERARY SECTION 🟩🟩 */}
          <div className="space-y-8 mt-8">

            <DayItineraryCard
              day={2}
              title="Betla National Park"
              bestTime="6:00 AM - 9:00 AM"
              travelTime="2h from Netarhat"
              entryFee="Free"
              weather="Pleasant, 18-25°C"
              activities={[
                "Explore scenic viewpoints",
                "Local attractions and heritage sites",
                "Nature walks and wildlife spotting"
              ]}
              foods={["Local Thali", "Dhuska"]}
            />

            <DayItineraryCard
              day={3}
              title="Patratu Valley"
              bestTime="6:00 AM - 9:00 AM"
              travelTime="4h from Betla"
              entryFee="₹50 per person"
              weather="Pleasant, 18-25°C"
              activities={[
                "Hilltop photography",
                "Lake view drive",
                "Nature trails and sightseeing"
              ]}
              foods={["Local Thali"]}
            />

            {/* JOURNEY ROUTE */}
            <JourneyRoute
              route={[
                { name: "Ranchi" },
                { name: "Netarhat", time: "2h" },
                { name: "Betla National Park", time: "2h" },
                { name: "Patratu", time: "2h" },
              ]}
            />

             {/* SERVICES */}
          <RecommendedServices />

          </div>
        </div>

        {/* RIGHT SIDE SUMMARY */}
        <SelectedSummary formData={formData} />
      </div>
    </div>
  );
}
