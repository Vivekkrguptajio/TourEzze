import { getGeminiModel } from "../utils/geminiClient.js";

export const generateItineraryService = async ({
  duration,
  budget,
  travellerType,
  startLocation,
  interests,
  preferences,
}) => {
  const model = getGeminiModel();

  const prompt = `
  Create a detailed travel itinerary in JSON ONLY.

  Inputs:
  - Duration: ${duration}
  - Budget: ${budget}
  - Traveller Type: ${travellerType}
  - Starting Location: ${startLocation}
  - Interests: ${interests.join(", ")}
  - Preferences: ${JSON.stringify(preferences)}

  Follow this JSON format exactly:

  {
    "summary": "",
    "overallBudget": "",
    "days": [
      {
        "day": 1,
        "title": "",
        "bestTime": "",
        "travelTime": "",
        "fee": "",
        "weather": "",
        "activities": ["", "", ""]
      }
    ]
  }
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
};
