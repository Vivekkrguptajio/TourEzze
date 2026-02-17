import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";
import { findHotelByEmail, createHotel } from "../repositories/hotel.repo.js";

export const registerHotelService = async (hotelData) => {
  const existing = await findHotelByEmail(hotelData.email);
  if (existing) {
    throw new Error("Hotel email already registered");
  }

  const hashedPassword = await bcrypt.hash(hotelData.password, 10);

  const newHotel = await createHotel({
    ...hotelData,
    password: hashedPassword,
    role: "hotel",
  });

  const token = generateToken({
    id: newHotel._id,
    email: newHotel.email,
    role: newHotel.role,
  });

  return { newHotel, token };
};

export const loginHotelService = async (email, password) => {
  const hotel = await findHotelByEmail(email);
  if (!hotel) throw new Error("Invalid email or password");

  const isMatch = await bcrypt.compare(password, hotel.password);
  if (!isMatch) throw new Error("Invalid email or password");

  const token = generateToken({
    id: hotel._id,
    email: hotel.email,
    role: hotel.role,
  });

  return { hotel, token };
};
