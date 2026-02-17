import express from "express";
import { createDestination, getDestinations, updateDestination } from "../controllers/destination.controller.js";
import { upload } from "../middleware/upload.js";
import Destination from "../models/destination.model.js";


const router = express.Router();

// CREATE (UPLOAD IMAGES)
router.post("/", upload.array("images", 10), createDestination);

// LIST ALL
router.get("/", getDestinations);

// UPDATE
router.put("/:id", updateDestination);

// DELETE (CORRECT ROUTE)
// DELETE DESTINATION (CORRECT)
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);

    if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Destination not found"
    });
    }

    res.json({
      success: true,
      message: "Destination deleted successfully"
    });

  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({
      success: false,
      message: "Server error while deleting destination"
    });
  }
});


export default router;
