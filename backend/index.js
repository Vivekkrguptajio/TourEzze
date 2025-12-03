import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import touristRoutes from "./src/Tourist/routes/tourist.routes.js";
import vendorRoutes from "./src/Vendor/routes/vendor.routes.js";
import itineraryRoutes from "./src/Tourist/routes/itinerary.routes.js";

import { connectDB } from "./src/common/utils/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

// Basic Route
app.get("/", (req, res) => {
  res.send("TourEzze Backend Running 🚀");
});

// Tourist routes
app.use("/api/tourist", touristRoutes);

// Vendor routes
app.use("/api/vendor", vendorRoutes);
app.use("/api/ai", itineraryRoutes);
// Server Start
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
