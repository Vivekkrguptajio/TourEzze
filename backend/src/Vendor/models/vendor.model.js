import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    // Vendor-specific fields
    shopName: {
      type: String,
      required: true,
    },
    category: {
      type: String, // e.g. "Handicraft", "Food", "Metal Craft"
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "vendor",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vendor", vendorSchema);
