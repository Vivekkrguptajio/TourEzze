const travelPlanSchema = new mongoose.Schema({
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
    photography: Boolean
  },
  aiPlan: Object
});
