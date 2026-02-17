import bcrypt from "bcryptjs";
import Vendor from "../models/vendor.model.js";
import { generateToken } from "../../common/utils/jwt.js";
import {
  vendorSignupSchema,
  vendorLoginSchema,
} from "../../common/validations/vendor.validation.js";

// SIGNUP
export const vendorSignup = async (req, res) => {
  try {
    const { error, value } = vendorSignupSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { name, email, password, shopName, category, address, phone } = value;

    const existing = await Vendor.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const vendor = await Vendor.create({
      name,
      email,
      password: hashedPassword,
      shopName,
      category,
      address,
      phone,
      role: "vendor",
    });

    const token = generateToken({ id: vendor._id, email: vendor.email, role: vendor.role });

    res.status(201).json({
      message: "Vendor registered successfully",
      user: {
        id: vendor._id,
        name: vendor.name,
        email: vendor.email,
        shopName: vendor.shopName,
        category: vendor.category,
        phone: vendor.phone,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// LOGIN
export const vendorLogin = async (req, res) => {
  try {
    const { error, value } = vendorLoginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { email, password } = value;

    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken({ id: vendor._id, email: vendor.email, role: vendor.role });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: vendor._id,
        name: vendor.name,
        email: vendor.email,
        shopName: vendor.shopName,
        category: vendor.category,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
