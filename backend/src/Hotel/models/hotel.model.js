import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelUser",
      required: true,
    },

    hotelName: { type: String, required: true },
    category: { type: String },
    starRating: { type: Number },

    description: { type: String },
    tags: [{ type: String }],

    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    mapUrl: { type: String },
    nearbyLandmarks: { type: String },

    phone: { type: String },
    email: { type: String },
    website: { type: String },
    contactPerson: { type: String },

    arVrLink: { type: String },

    imageLinks: [{ type: String }],
    coverPhoto: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", HotelSchema);
