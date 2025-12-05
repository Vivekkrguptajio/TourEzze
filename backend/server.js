import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";   // ⭐ Required for proxy

// Common DB
import { connectDB } from "./src/common/utils/db.js";

// Routes Import
import chatRoutes from "./src/Chatbot/routes/chat.routes.js";
import touristRoutes from "./src/Tourist/routes/tourist.routes.js";
import vendorRoutes from "./src/Vendor/routes/vendor.routes.js";
import itineraryRoutes from "./src/Tourist/routes/itinerary.routes.js";

// ⭐ NEW: Destination Module
import destinationRoutes from "./src/Admin/routes/destination.routes.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -----------------------------------------
connectDB();

const app = express();

// -----------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ⭐⭐⭐ UNIVERSAL IMAGE PROXY — ANY LINK WORKS ⭐⭐⭐
app.get("/image-proxy", async (req, res) => {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl) return res.status(400).send("URL missing");

    const response = await fetch(imageUrl);

    const contentType = response.headers.get("content-type");
    res.set("Content-Type", contentType);

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.log("IMAGE PROXY ERROR:", err);
    res.status(500).send("Failed to load image");
  }
});


// -----------------------------------------
app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});

app.use((req, res, next) => {
  console.log(`📩 ${req.method} → ${req.url}`);
  next();
});

// -----------------------------------------
app.use("/api", chatRoutes);
app.use("/api/tourist", touristRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/ai", itineraryRoutes);

// ⭐ DESTINATION ROUTES
app.use("/api/admin/destinations", destinationRoutes);

// -----------------------------------------
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Requested resource not found",
  });
});

// -----------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
