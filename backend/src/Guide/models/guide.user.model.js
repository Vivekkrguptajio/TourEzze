import mongoose from "mongoose";

const GuideUserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },

    role: {
      type: String,
      default: "guide",
      enum: ["guide", "vendor", "hotel", "admin"],
    },

    languages: [{ type: String }],
    experience: { type: String },
    location: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("GuideUser", GuideUserSchema);
