import { Router } from "express";
import {
  touristSignup,
  touristLogin,
  getTouristProfile,
} from "../controllers/tourist.controller.js";


import { authenticate } from "../../common/middleware/auth.middleware.js"

const router = Router();

// Public routes
router.post("/signup", touristSignup);
router.post("/login", touristLogin);

// Protected route example
router.get("/me", authenticate, getTouristProfile);

export default router;
