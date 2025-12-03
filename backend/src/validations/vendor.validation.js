import Joi from "joi";

export const vendorSignupSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  shopName: Joi.string().required(),
  category: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().min(10).max(15).required(),
});

export const vendorLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
