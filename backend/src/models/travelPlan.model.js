import mongoose from "mongoose";

const travelPlanSchema = new mongoose.Schema(
  {
    duration: String,
    budget: Number,
    travellerType: String,
    startLocation: String,
    interests: [String],
    preferences: Object,
    aiPlan: Object,        // parsed JSON plan
  },
  { timestamps: true }
);

export default mongoose.model("TravelPlan", travelPlanSchema);
