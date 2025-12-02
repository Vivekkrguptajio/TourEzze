import { generateItineraryService } from "../services/itinerary.service.js";
import TravelPlan from "../models/travelPlan.model.js";

export const generateItinerary = async (req, res) => {
  try {
    const {
      duration,
      budget,
      travellerType,
      startLocation,
      interests,
      preferences,
    } = req.body;

    if (!duration || !budget || !travellerType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const planText = await generateItineraryService({
      duration,
      budget,
      travellerType,
      startLocation,
      interests,
      preferences,
    });

    let parsedPlan = planText;
    try {
      parsedPlan = JSON.parse(planText);
    } catch (e) {
      // agar JSON na ho to raw text hi bhej denge
    }

    const saved = await TravelPlan.create({
      duration,
      budget,
      travellerType,
      startLocation,
      interests,
      preferences,
      aiPlan: typeof parsedPlan === "object" ? parsedPlan : { raw: planText },
    });

    return res.status(200).json({
      success: true,
      itinerary: parsedPlan,
      id: saved._id,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "AI itinerary generation failed",
      error: err.message,
    });
  }
};


export const getTravelHistory = async (req, res) => {
  try {
    const plans = await TravelPlan.find().sort({ createdAt: -1 }).limit(10);

    res.json({ success: true, plans });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
      error: err.message,
    });
  }
};
