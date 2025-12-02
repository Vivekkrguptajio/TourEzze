import express from "express";
import {
  generateItinerary,
  getTravelHistory,
} from "../controllers/itinerary.controller.js";

const router = express.Router();

router.post("/generate-itinerary", generateItinerary);
router.get("/history", getTravelHistory);

export default router;
