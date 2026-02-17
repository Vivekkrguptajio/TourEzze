import express from "express";
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

// CREATE
router.post("/", createEvent);

// GET ALL
router.get("/", getEvents);

// UPDATE
router.put("/:id", updateEvent);

// DELETE
router.delete("/:id", deleteEvent);

export default router;
