import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#6aa8ff", // Azul do seu app
        secondary: "#1e293b", // Slate 800
        dark: "#0f172a", // Slate 900
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
