import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./src/Chatbot/routes/chat.routes.js";


import touristRoutes from "./src/Tourist/routes/tourist.routes.js";
import vendorRoutes from "./src/Vendor/routes/vendor.routes.js";
import itineraryRoutes from "./src/Tourist/routes/itinerary.routes.js";

// import chatRoutes from "./src/chatbot/routes/chat.routes.js";

import { connectDB } from "./src/common/utils/db.js";

// DB
connectDB();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Gemini Chatbot Backend running 🚀");
});

// Routes

app.use("/api", chatRoutes);


/* -------------------------------------------------
   🚗 2) OTHER MODULE ROUTES — NICHE
-------------------------------------------------- */
app.use("/api/tourist", touristRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/ai", itineraryRoutes);

/* -------------------------------------------------
   📝 3) REQUEST LOGGER
-------------------------------------------------- */
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

/* -------------------------------------------------
   ❌ 4) GLOBAL 404 — SABSE LAST
-------------------------------------------------- */
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Requested source cannot be found",
  });
});


// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
