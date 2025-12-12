import { getGeminiModel } from "../utils/geminiClient.js";

export const generateItineraryService = async (payload) => {
  const {
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
    photography,
  } = payload;

  const model = getGeminiModel();

  const prompt = `
You are a professional travel planner AI.

Generate a COMPLETE travel itinerary in PURE JSON.

--- INPUT DATA ---
Destination/Region: ${destination}
Starting Location: ${startLocation}
Duration: ${duration}
Budget: ₹${budget}
Dates: ${startDate || "Not given"} → ${endDate || "Not given"}

Traveller Type: ${travellerType}
Age Group: ${ageGroup}
Transport Mode: ${transportMode}
Food Preference: ${foodPreference}
Comfort Level: ${comfortLevel}
Walking Preference: ${walkingPreference}
Photography Priority: ${photography}

Interests: ${interests.join(", ")}

--- OUTPUT FORMAT (MUST FOLLOW EXACTLY) ---
Return ONLY valid JSON matching this structure:

{
  "summary": "",
  "weather": "",
  "overallBudget": "",
  "days": [
    {
      "day": 1,
      "title": "",
      "startTime": "",
      "bestTime": "",
      "travelTime": "",
      "fee": "",
      "weather": "",
      "food": "",
      "activities": []
    }
  ],
  "routePlan": {
    "locations": [],
    "totalDistance": "",
    "totalTime": ""
  },
  "recommended": [
    {
      "type": "",
      "name": "",
      "description": "",
      "price": "",
      "rating": ""
    }
  ]
}

Rules:
- Do NOT add markdown or explanation.
- Do NOT wrap JSON in backticks.
- Make sure JSON is valid and parsable.
- At least 3 days if duration >= 3.
- routePlan.locations should follow realistic route order.
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
};
