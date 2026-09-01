import type { Config } from "tailwindcss";

/**
 * Referencia de tema (Tailwind v4 usa @theme en globals.css).
 * Colores Export 8 Inc.: navy primario, blue-600 acento, surface fondos.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D36",
          deep: "#071525",
        },
        accent: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          soft: "#F1F5F9",
        },
        muted: "#64748B",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
