import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import touristRoutes from "./src/routes/tourist.routes.js";
import vendorRoutes from "./src/routes/vendor.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✔️");
  } catch (error) {
    console.error("MongoDB Connection Error ❌", error);
    process.exit(1);
  }
};

connectDB();

// Basic Route
app.get("/", (req, res) => {
  res.send("TourEzze Backend Running 🚀");
});

// Tourist routes
app.use("/api/tourist", touristRoutes);

// Vendor routes
app.use("/api/vendor", vendorRoutes);

// Server Start
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
