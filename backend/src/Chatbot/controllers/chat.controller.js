import { genAI } from "../config/gemini.config.js";

export const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(message);
    const reply = result?.response?.text();

    return res.json({ success: true, reply });
  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
};
