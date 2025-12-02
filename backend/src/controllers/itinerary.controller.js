export const generateItinerary = async (req, res) => {
  try {
    const {
      duration,
      budget,
      travellerType,
      startLocation,
      interests,
      preferences   // this now contains 7–8 extra fields
    } = req.body;

    // Preference breakdown
    const {
      destination,
      startDate,
      endDate,
      ageGroup,
      transportMode,
      foodPreference,
      comfortLevel,
      walkingPreference,
      photography
    } = preferences;

    const planText = await generateItineraryService({
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
    });

    let parsedPlan = planText;
    try {
      parsedPlan = JSON.parse(planText);
    } catch {}

    return res.status(200).json({
      success: true,
      itinerary: parsedPlan
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "AI itinerary generation failed",
      error: err.message
    });
  }
};
