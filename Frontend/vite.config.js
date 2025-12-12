import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        smoothSlide: {
          "0%":   { transform: "translateX(100%)", opacity: "0" },
          "10%":  { transform: "translateX(0%)", opacity: "1" },
          "50%":  { transform: "translateX(0%)", opacity: "1" },
          "90%":  { transform: "translateX(-50%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        smoothSlide: "smoothSlide 6s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
