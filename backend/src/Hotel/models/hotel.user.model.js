import mongoose from "mongoose";

const HotelUserSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },

    role: {
      type: String,
      default: "hotel",
      enum: ["hotel", "vendor", "admin"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("HotelUser", HotelUserSchema);
