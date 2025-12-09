import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";

// -----------------------------------------
// 📌 DATABASE CONNECT
// -----------------------------------------
import { connectDB } from "./src/common/utils/db.js";
connectDB();

// -----------------------------------------
// 📌 IMPORT ROUTES (All Modules)
// -----------------------------------------

// Chatbot + Tourist
import chatRoutes from "./src/Chatbot/routes/chat.routes.js";
import touristRoutes from "./src/Tourist/routes/tourist.routes.js";
import itineraryRoutes from "./src/Tourist/routes/itinerary.routes.js";

// Vendor
import vendorRoutes from "./src/Vendor/routes/vendor.routes.js";

// Admin
import destinationRoutes from "./src/Admin/routes/destination.routes.js";
import eventRoutes from "./src/Admin/routes/event.routes.js";

// ⭐ NEW: Tour Package Module  
import tourPackageRoutes from "./src/Admin/routes/tourPackage.routes.js";

// Hotel
import hotelAuthRoutes from "./src/Hotel/routes/hotel.auth.routes.js";
import hotelRoutes from "./src/Hotel/routes/hotel.routes.js";

// Guide
import guideAuthRoutes from "./src/Guide/routes/guide.auth.routes.js";

// 💳 Payment Module ✅
import paymentRoutes from "./src/Payments/routes/payment.routes.js";

// -----------------------------------------
// 📌 PATH FIX FOR ES MODULES (__dirname)
// -----------------------------------------
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -----------------------------------------
// 📌 EXPRESS APP INIT
// -----------------------------------------
const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// -----------------------------------------
// 📌 STATIC FILES (Uploads Folder)
// -----------------------------------------
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// -----------------------------------------
// ⭐ UNIVERSAL IMAGE PROXY
// -----------------------------------------
app.get("/image-proxy", async (req, res) => {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl) return res.status(400).send("URL missing");

    const response = await fetch(imageUrl);
    if (!response.ok) return res.status(400).send("Image fetch failed");

    res.set("Content-Type", response.headers.get("content-type"));
    const buffer = Buffer.from(await response.arrayBuffer());
    res.send(buffer);
  } catch (err) {
    console.error("IMAGE PROXY ERROR:", err);
    res.status(500).send("Failed to load image");
  }
});

// -----------------------------------------
// 📌 LOGGER
// -----------------------------------------
app.use((req, res, next) => {
  console.log(`📩 ${req.method} → ${req.originalUrl}`);
  next();
});

// -----------------------------------------
// 📌 BASE ROUTE
// -----------------------------------------
app.get("/", (req, res) => {
  res.send("🚀 Backend Server Running Successfully!");
});

// -----------------------------------------
// ⭐ ATTACH ALL ROUTES ✅
// -----------------------------------------

// Chatbot + Tourist
app.use("/api", chatRoutes);
app.use("/api/tourist", touristRoutes);
app.use("/api/ai", itineraryRoutes);

// Vendor
app.use("/api/vendor", vendorRoutes);

// Admin
app.use("/api/admin/destinations", destinationRoutes);
app.use("/api/admin/events", eventRoutes);

// ⭐ Tour Package Module
app.use("/api/admin/tour-packages", tourPackageRoutes);

// Hotel Module
app.use("/api/hotel/auth", hotelAuthRoutes);
app.use("/api/hotel", hotelRoutes);

// Guide Module
app.use("/api/guide/auth", guideAuthRoutes);

// 💳 Payment Module ✅ (CORRECT POSITION)
app.use("/api/payments", paymentRoutes);

// -----------------------------------------
// ❌ 404 HANDLER ✅ MUST BE LAST
// -----------------------------------------
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// -----------------------------------------
// 🚀 START SERVER
// -----------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
