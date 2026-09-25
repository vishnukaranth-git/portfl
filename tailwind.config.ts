import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0c0e14",
        canvasBg: "#0b0f19",
        navy: {
          950: "#020713",
          900: "#03112b",
          850: "#05183d",
          800: "#072355",
          700: "#0d367e",
          600: "#1850b5",
        },
        electric: {
          500: "#0070f3",
          400: "#38bdf8",
          300: "#7dd3fc",
        },
        warm: {
          600: "#ea580c",
          500: "#f97316",
          400: "#fb923c",
          300: "#fdba74",
        },
        surface: {
          900: "#10131d",
          800: "#151926",
          700: "#1c2233",
          600: "#242c42",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.12) 0%, rgba(249, 115, 22, 0.08) 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
