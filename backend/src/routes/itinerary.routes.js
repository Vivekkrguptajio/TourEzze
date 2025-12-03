import express from "express";
import {
  generateItinerary,
  savePlan,
  getHistory,
} from "../controllers/itinerary.controller.js";

const router = express.Router();

router.post("/generate-itinerary", generateItinerary);
router.post("/save-plan/:id", savePlan);
router.get("/history", getHistory);

export default router;
