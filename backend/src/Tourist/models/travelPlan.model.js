import mongoose from "mongoose";

const travelPlanSchema = new mongoose.Schema(
  {
    // input config
    duration: String,
    budget: Number,
    travellerType: String,
    startLocation: String,
    interests: [String],
    preferences: {
      destination: String,
      startDate: String,
      endDate: String,
      ageGroup: String,
      transportMode: String,
      foodPreference: String,
      comfortLevel: String,
      walkingPreference: String,
      photography: Boolean,
    },

    // AI output
    aiPlan: Object,

    // for Save Itinerary button
    isSaved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("TravelPlan", travelPlanSchema);
