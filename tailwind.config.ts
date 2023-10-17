import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        "belgrano": ["Belgrano", "sans-serif"],
        "signika": ["Signika Negative", "sans-serif"],
      },
      colors: {
        gunmetal: {
          DEFAULT: "#2b303a",
          100: "#090a0c",
          200: "#111317",
          300: "#1a1d23",
          400: "#23272f",
          500: "#2b303a",
          600: "#4e576a",
          700: "#727e97",
          800: "#a1a9ba",
          900: "#d0d4dc"
        },
        non_photo_blue: {
          DEFAULT: "#92dce5",
          100: "#0f373d",
          200: "#1d6f7a",
          300: "#2ca6b6",
          400: "#57c8d6",
          500: "#92dce5",
          600: "#aae3ea",
          700: "#bfeaef",
          800: "#d4f1f5",
          900: "#eaf8fa"
        },
        lavender_blush: {
          DEFAULT: "#eee5e9",
          100: "#39252e",
          200: "#724a5c",
          300: "#a5758a",
          400: "#caaeba",
          500: "#eee5e9",
          600: "#f2ebee",
          700: "#f5f0f3",
          800: "#f9f5f7",
          900: "#fcfafb"
        },
        gray: {
          DEFAULT: "#7c7c7c",
          100: "#191919",
          200: "#323232",
          300: "#4b4b4b",
          400: "#646464",
          500: "#7c7c7c",
          600: "#979797",
          700: "#b1b1b1",
          800: "#cbcbcb",
          900: "#e5e5e5"
        },
        chili_red: {
          DEFAULT: "#d64933",
          100: "#2c0d09",
          200: "#591b12",
          300: "#85281a",
          400: "#b13623",
          500: "#d64933",
          600: "#df6d5b",
          700: "#e79184",
          800: "#efb6ad",
          900: "#f7dad6"
        }
      }
    }
  },
  plugins: []
};
export default config;
