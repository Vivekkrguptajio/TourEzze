import express from "express";
import {
  createTourPackage,
  getAllTourPackages,
  getTourPackageById,
  updateTourPackage,
  deleteTourPackage,
} from "../controllers/tourPackage.controller.js";

const router = express.Router();

// Admin CRUD
router.post("/create", createTourPackage);
router.get("/", getAllTourPackages);
router.get("/:id", getTourPackageById);
router.put("/:id", updateTourPackage);
router.delete("/:id", deleteTourPackage);

export default router;
