import Joi from "joi";

export const hotelSignupSchema = Joi.object({
  hotelName: Joi.string().min(2).required(),
  ownerName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  password: Joi.string().min(6).required(),
  address: Joi.string().min(5).required(),
});

export const hotelLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
