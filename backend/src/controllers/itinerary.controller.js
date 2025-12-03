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
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const {
      destination,
      startDate,
      endDate,
      ageGroup,
      transportMode,
      foodPreference,
      comfortLevel,
      walkingPreference,
      photography,
    } = preferences || {};

    const aiText = await generateItineraryService({
      duration,
      budget,
      travellerType,
      startLocation,
      interests: interests || [],
      destination,
      startDate,
      endDate,
      ageGroup,
      transportMode,
      foodPreference,
      comfortLevel,
      walkingPreference,
      photography,
    });

    let aiPlan = aiText;
    try {
      aiPlan = JSON.parse(aiText);
    } catch (e) {
      // agar JSON parse na ho to bhi raw text bhejdenge
      console.warn("AI JSON parse failed, returning raw text");
    }

    const doc = await TravelPlan.create({
      duration,
      budget,
      travellerType,
      startLocation,
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
      aiPlan,
    });

    return res.status(200).json({
      success: true,
      itinerary: aiPlan,
      planId: doc._id,
    });
  } catch (err) {
    console.error("generateItinerary error:", err);
    return res.status(500).json({
      success: false,
      message: "AI itinerary generation failed",
      error: err.message,
    });
  }
};

// "Save Itinerary" button ke liye
export const savePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await TravelPlan.findByIdAndUpdate(
      id,
      { isSaved: true },
      { new: true }
    );
    if (!plan) {
      return res.status(404).json({ success: false, message: "Plan not found" });
    }
    res.json({ success: true, plan });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to save plan",
      error: err.message,
    });
  }
};

// Recent history (optional)
export const getHistory = async (req, res) => {
  try {
    const plans = await TravelPlan.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json({ success: true, plans });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load history",
      error: err.message,
    });
  }
};
