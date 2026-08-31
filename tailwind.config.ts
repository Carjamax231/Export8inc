import type { Config } from "tailwindcss";

/**
 * Referencia de tema (Tailwind v4 usa @theme en globals.css).
 * Colores Export 8 Inc.: navy primario, cyan acento, surface fondos.
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
        cyan: {
          DEFAULT: "#00B4D8",
          dark: "#0096C7",
        },
        surface: {
          DEFAULT: "#F4F7FB",
          soft: "#E8EEF6",
        },
        muted: "#5B6B7F",
        line: "#D7E0EC",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
