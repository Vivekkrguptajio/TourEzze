import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    location: String,
    mapUrl: String,
    bestSeason: String,
    arvr: String,
    arvrLink: String,
    description: String,
    nearby: String,
    tags: [String],

    // ⭐ DIRECT IMAGE LINKS (NO UPLOAD)
    imageLinks: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
