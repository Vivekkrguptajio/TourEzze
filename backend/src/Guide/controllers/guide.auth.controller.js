import { registerGuide, loginGuide } from "../services/guide.auth.service.js";

export const guideSignup = async (req, res) => {
  try {
    const guide = await registerGuide(req.body);

    res.json({
      success: true,
      message: "Guide Registered Successfully",
      guide,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const guideLogin = async (req, res) => {
  try {
    const { guide, token } = await loginGuide(
      req.body.email,
      req.body.password
    );

    res.json({
      success: true,
      message: "Login Successful",
      guide,
      token,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
