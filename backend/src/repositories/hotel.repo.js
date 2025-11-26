import Hotel from "../models/hotel.model.js";

export const findHotelByEmail = (email) => {
  return Hotel.findOne({ email });
};

export const createHotel = (data) => {
  return Hotel.create(data);
};

export const getHotelById = (id) => {
  return Hotel.findById(id).select("-password");
};
