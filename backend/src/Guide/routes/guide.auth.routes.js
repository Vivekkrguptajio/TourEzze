import express from "express";
import { guideSignup, guideLogin } from "../controllers/guide.auth.controller.js";

const router = express.Router();

router.post("/signup", guideSignup);
router.post("/login", guideLogin);

export default router;
