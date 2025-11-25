import bcrypt from "bcryptjs";
import Tourist from "../models/tourist.model.js";
import { generateToken } from "../utils/jwt.js";
import {
  touristSignupSchema,
  touristLoginSchema,
} from "../validations/tourist.validation.js";

// POST /api/tourist/signup
export const touristSignup = async (req, res) => {
  try {
    // 1. Validate input
    const { error, value } = touristSignupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, email, password } = value;

    // 2. Check if email already exists
    const existing = await Tourist.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const tourist = await Tourist.create({
      name,
      email,
      password: hashedPassword,
      role: "tourist",
    });

    // 5. Generate token
    const token = generateToken({
      id: tourist._id,
      email: tourist.email,
      role: tourist.role,
    });

    return res.status(201).json({
      message: "Tourist registered successfully",
      user: {
        id: tourist._id,
        name: tourist.name,
        email: tourist.email,
        role: tourist.role,
      },
      token,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// POST /api/tourist/login
export const touristLogin = async (req, res) => {
  try {
    const { error, value } = touristLoginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password } = value;

    // 1. Find user
    const tourist = await Tourist.findOne({ email });
    if (!tourist) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, tourist.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate token
    const token = generateToken({
      id: tourist._id,
      email: tourist.email,
      role: tourist.role,
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: tourist._id,
        name: tourist.name,
        email: tourist.email,
        role: tourist.role,
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// Example protected route (optional)
export const getTouristProfile = async (req, res) => {
  try {
    const tourist = await Tourist.findById(req.user.id).select("-password");
    if (!tourist) {
      return res.status(404).json({ message: "Tourist not found" });
    }
    return res.json({ user: tourist });
  } catch (err) {
    console.error("Profile error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
