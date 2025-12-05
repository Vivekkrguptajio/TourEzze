import { genAI } from "../config/gemini.config.js";

const LANGUAGE_GUIDE = {
  English: "Reply in simple English.",
  Hindi: "Reply in simple Hindi.",
  Nagpuri: "Reply in Nagpuri (Sadri) local tone.",
  Santhali: "Reply in Santhali traditional tone.",
  Khortha: "Reply in Khortha friendly local style.",
  Bhojpuri: "Reply in Bhojpuri polite, simple style.",
  Magahi: "Reply in Magahi friendly tone."
};

// 🔥 ALLOWED KEYWORDS (Only tourism allowed)
const ALLOWED_KEYWORDS = [
  "jharkhand", "ranchi", "hazaribagh", "netarhat", "deoghar", "dhanbad",
  "tour", "tourism", "travel", "trip", "visit", "places",
  "waterfall", "falls", "hill", "temple", "jungle", "forest",
  "park", "wildlife", "hotel", "stay", "food", "route", "itinerary",
  "sunrise", "sunset", "dam", "lake", "heritage"
];

export const chatWithGemini = async (req, res) => {
  try {
    const { message, lang } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const languageRule = LANGUAGE_GUIDE[lang] || LANGUAGE_GUIDE["English"];
    const userMessage = message.toLowerCase();

    // ❌ STEP 1: Block all non-tourism questions
    const isAllowed = ALLOWED_KEYWORDS.some((k) => userMessage.includes(k));

    if (!isAllowed) {
      return res.json({
        success: true,
        reply: "I can only help with Jharkhand tourism related information."
      });
    }

    // STEP 2: Gemini model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // 🔥 SUPER STRICT TOURISM-ONLY PROMPT
    const prompt = `
You are CHAMPA – Jharkhand Tourism AI Assistant.

ALLOWED TOPICS ONLY:
- Jharkhand tourist places
- Waterfalls, hills, forests
- Temples, culture, food
- Travel routes, timing, safety
- Hotels, stay, itinerary
- Wildlife, national parks

NOT ALLOWED:
Anything outside Jharkhand tourism.

IF QUESTION OUTSIDE DOMAIN:
Reply EXACTLY: "I can only help with Jharkhand tourism related information."

OUTPUT FORMAT (STRICT):
--------------------------------
Title:
- point_1
- point_2
- point_3
--------------------------------

RULES:
1) Always reply in ${languageRule}
2) Total answer under **80 words**
3) Use ONLY 2–4 bullet points
4) Each bullet max **10–12 words**
5) NO paragraphs, NO emojis
6) Keep answer clean & tourism-focused

USER ASKED:
"${message}"
`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return res.json({
      success: true,
      reply: reply || "No clean response generated.",
    });

  } catch (error) {
    console.error("Gemini Error =>", error);
    return res.status(500).json({
      success: false,
      message: "AI server error",
    });
  }
};
