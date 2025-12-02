export const generateItineraryService = async ({
  duration,
  budget,
  travellerType,
  startLocation,
  interests,
  destination,
  startDate,
  endDate,
  ageGroup,
  transportMode,
  foodPreference,
  comfortLevel,
  walkingPreference,
  photography
}) => {

  const model = getGeminiModel();

  const prompt = `
  You are a professional travel planner AI.

  Create a DAY-WISE trip itinerary in JSON ONLY.

  --- TRIP DETAILS ---
  Destination: ${destination}
  Starting Location: ${startLocation}
  Duration: ${duration}
  Budget: ₹${budget}
  Dates: ${startDate || "Not given"} to ${endDate || "Not given"}

  --- USER PROFILE ---
  Traveller Type: ${travellerType}
  Age Group: ${ageGroup}
  Transport Mode: ${transportMode}
  Food Preference: ${foodPreference}
  Comfort Level: ${comfortLevel}
  Walking Preference: ${walkingPreference}
  Photography Priority: ${photography}

  --- INTERESTS ---
  ${interests.join(", ")}

  --- OUTPUT JSON FORMAT ---
  {
    "summary": "",
    "weather": "",
    "bestSeason": "",
    "overallBudget": "",
    "hotelSuggestions": [{ "name": "", "price": "" }],
    "transportPlan": {
        "mode": "",
        "totalDistance": "",
        "fuelCostApprox": ""
    },
    "days": [
      {
        "day": 1,
        "title": "",
        "bestTime": "",
        "travelTime": "",
        "fee": "",
        "weather": "",
        "activities": []
      }
    ]
  }
  `;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return text;
};
