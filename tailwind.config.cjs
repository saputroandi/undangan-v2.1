/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#d2d3d5",
      },
      fontFamily: {
        sans: ["Kalista", ...defaultTheme.fontFamily.sans],
        serif: ["Noto Serif", ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        waving: {
          "0%, 100%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        waving: "waving 7s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        rotate: "rotate 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
