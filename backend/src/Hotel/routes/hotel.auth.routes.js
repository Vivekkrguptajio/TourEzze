import express from "express";
import { hotelRegister, hotelLogin } from "../controllers/hotel.auth.controller.js";

const router = express.Router();

router.post("/register", hotelRegister);
router.post("/login", hotelLogin);

export default router;
