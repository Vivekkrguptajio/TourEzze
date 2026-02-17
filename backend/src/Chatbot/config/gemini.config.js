import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";


export const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
