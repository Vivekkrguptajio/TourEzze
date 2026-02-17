import {
  registerHotelOwner,
  loginHotelOwner,
} from "../services/hotel.auth.service.js";

export const hotelRegister = async (req, res) => {
  try {
    const user = await registerHotelOwner(req.body);

    res.json({
      success: true,
      message: "Hotel Owner Registered Successfully",
      user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const hotelLogin = async (req, res) => {
  try {
    const { user, token } = await loginHotelOwner(
      req.body.email,
      req.body.password
    );

    res.json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
