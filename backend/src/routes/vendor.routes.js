import { Router } from "express";
import { vendorSignup, vendorLogin } from "../controllers/vendor.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", vendorSignup);
router.post("/login", vendorLogin);

// Example Auth Protected Route
router.get("/profile", authenticate, (req, res) => {
  res.json({ message: "Vendor authenticated", user: req.user });
});

export default router;
