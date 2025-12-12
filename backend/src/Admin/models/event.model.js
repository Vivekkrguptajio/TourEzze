import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    organizer: String,
    location: String,
    eventDate: String,
    description: String,
    category: String,

    // array of strings
    tags: { type: [String], default: [] },

    // image url
    bannerImage: String,

    // pdf / doc link
    documentLink: String,

    // AR/VR
    arvr: { type: String, default: "no" },
    arvrLink: String,
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
