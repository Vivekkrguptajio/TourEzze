import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch"; // ⭐ Required for universal proxy

// -----------------------------------------
// 📌 DATABASE CONNECT
// -----------------------------------------
import { connectDB } from "./src/common/utils/db.js";
connectDB();

// -----------------------------------------
// 📌 ROUTES IMPORTS
// -----------------------------------------
import chatRoutes from "./src/Chatbot/routes/chat.routes.js";
import touristRoutes from "./src/Tourist/routes/tourist.routes.js";
import vendorRoutes from "./src/Vendor/routes/vendor.routes.js";
import itineraryRoutes from "./src/Tourist/routes/itinerary.routes.js";

// ⭐ Admin Modules
import destinationRoutes from "./src/Admin/routes/destination.routes.js";
import eventRoutes from "./src/Admin/routes/event.routes.js";  // ⭐ NEW



// -----------------------------------------
// 📌 PATH FIX FOR __dirname IN ES MODULE
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// -----------------------------------------
// 📌 STATIC FILE HANDLING
// -----------------------------------------
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// -----------------------------------------
// ⭐ UNIVERSAL IMAGE PROXY (Google Drive / Wiki / ANY LINK Works)
// -----------------------------------------
app.get("/image-proxy", async (req, res) => {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl) {
      return res.status(400).send("URL missing");
    }

    const response = await fetch(imageUrl);

    if (!response.ok) {
      return res.status(500).send("Image fetch error");
    }

    res.set("Content-Type", response.headers.get("content-type"));

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.log("IMAGE PROXY ERROR:", err);
    res.status(500).send("Failed to load image");
  }
});


// -----------------------------------------
// 📌 TEST ROUTE
// -----------------------------------------
app.get("/", (req, res) => {
  res.send("🚀 Backend Server Running Successfully!");
});


// -----------------------------------------
// 📌 LOGGER (Request Track)
// -----------------------------------------
app.use((req, res, next) => {
  console.log(`📩 ${req.method} → ${req.url}`);
  next();
});


// -----------------------------------------
// 📌 ATTACH ALL ROUTES
// -----------------------------------------
app.use("/api", chatRoutes);
app.use("/api/tourist", touristRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/ai", itineraryRoutes);

// ⭐ ADMIN MODULES
app.use("/api/admin/destinations", destinationRoutes);
app.use("/api/admin/events", eventRoutes);   // ⭐ EVENT ROUTES



// -----------------------------------------
// ❌ 404 – KEEP ALWAYS LAST
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
