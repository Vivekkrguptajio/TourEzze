const cleanAiJson = (raw) => {
  if (!raw || typeof raw !== "string") return raw;

  let cleaned = raw;

  // 1) remove ```json OR ```
  cleaned = cleaned.replace(/```json/gi, "");
  cleaned = cleaned.replace(/```/g, "");

  // 2) remove leading "json"
  cleaned = cleaned.replace(/^json/i, "");

  // 3) trim
  cleaned = cleaned.trim();

  // 4) force start from first {
  const firstBrace = cleaned.indexOf("{");
  if (firstBrace !== -1) {
    cleaned = cleaned.slice(firstBrace);
  }

  // 5) force end at last }
  const lastBrace = cleaned.lastIndexOf("}");
  if (lastBrace !== -1) {
    cleaned = cleaned.slice(0, lastBrace + 1);
  }

  return cleaned.trim();
};
