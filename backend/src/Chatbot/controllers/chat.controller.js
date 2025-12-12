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

export const chatWithGemini = async (req, res) => {
  try {
    const { message, lang } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const languageRule = LANGUAGE_GUIDE[lang] || LANGUAGE_GUIDE.English;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // ================= PROMPT ==================
    const prompt = `
You are CHAMPA – Jharkhand Tourism AI Assistant.

CRITICAL RULE:
If the user asks anything outside Jharkhand tourism, reply EXACTLY:
"I can only help with Jharkhand tourism related information."

ALLOWED CONTENT:
- Jharkhand tourist places
- Waterfalls, hills, forests
- Temples, culture, festivals, food
- Travel routes, distance, timing
- Hotels, stay options
- Wildlife, national parks, adventure

OUTPUT FORMAT (STRICT):
The answer MUST contain ONLY:
- Exactly 3 bullet points
- Each bullet must start with "- "
- Each point must be MAXIMUM 30 words
- NO paragraphs
- NO emojis
- NO other formatting
- NO heading unless it's part of a bullet
- NO extra lines before or after

STYLE:
- Reply in ${languageRule}
- Tourism guide tone
- Clear, short, helpful sentences

USER QUESTION:
"${message}"

Now generate EXACTLY 3 bullet points. Nothing more.
`;
    // ===========================================

    const result = await model.generateContent(prompt);
    let reply = result.response.text().trim();

    // Clean extra blank lines
    reply = reply.replace(/\n{3,}/g, "\n");

    // Count bullets
    const bullets = reply.match(/^- /gm) || [];

    // Validate bullet count (must be EXACTLY 3)
    const isValidCount = bullets.length === 3;

    // Validate word count (<= 30 words each)
    let isValidWordLimit = true;
    reply.split("\n").forEach((line) => {
      if (line.startsWith("- ")) {
        const words = line.split(/\s+/).length;
        if (words > 30) isValidWordLimit = false;
      }
    });

    // If invalid → fallback safe response (EXACTLY 3 bullets)
    if (!isValidCount || !isValidWordLimit) {
      reply = `
- Only Jharkhand tourism questions are allowed; your request did not follow the required answer format.
- Each response must contain exactly 3 bullet points, with each point limited to 30 words.
- Please ask again with a valid Jharkhand tourism query for a proper response.
`.trim();
    }

    return res.json({ success: true, reply });

  } catch (error) {
    console.error("Gemini Error:", error);
    return res.status(500).json({
      success: false,
      message: "AI server error",
    });
  }
};
