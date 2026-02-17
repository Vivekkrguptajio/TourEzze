import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  day: Number,
  title: String,
  description: String,
});

const tourPackageSchema = new mongoose.Schema(
  {
    packageName: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true }, // 3 Days / 2 Nights
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },

    images: [{ type: String }], // image URLs

    description: { type: String },

    highlights: [{ type: String }],

    itinerary: [itinerarySchema],

    inclusions: [{ type: String }],
    exclusions: [{ type: String }],

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("TourPackage", tourPackageSchema);
