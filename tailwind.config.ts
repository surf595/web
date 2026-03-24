import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f5f2ec",
        stone: "#d8d2c5",
        ink: "#1f1f1c",
        moss: "#5f6a63",
        pearl: "#fcfbf8"
      },
      fontFamily: {
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        card: "0 4px 24px rgba(31, 31, 28, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
