import {
  hotelSignupSchema,
  hotelLoginSchema,
} from "../validations/hotel.validation.js";
import {
  registerHotelService,
  loginHotelService,
} from "../services/hotel.service.js";
import Hotel from "../models/hotel.model.js";

// Hotel Signup
export const hotelSignup = async (req, res) => {
  try {
    const { error, value } = hotelSignupSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { newHotel, token } = await registerHotelService(value);

    return res.status(201).json({
      message: "Hotel registered successfully",
      hotel: {
        id: newHotel._id,
        hotelName: newHotel.hotelName,
        email: newHotel.email,
        role: newHotel.role,
      },
      token,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// Hotel Login
export const hotelLogin = async (req, res) => {
  try {
    const { error, value } = hotelLoginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { email, password } = value;
    const { hotel, token } = await loginHotelService(email, password);

    return res.status(200).json({
      message: "Login successful",
      hotel: {
        id: hotel._id,
        hotelName: hotel.hotelName,
        email: hotel.email,
        role: hotel.role,
      },
      token,
    });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

// Protected profile route
export const hotelProfile = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.user.id).select("-password");
    return res.json(hotel);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
