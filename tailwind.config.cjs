/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#373435",
        secondary: "#d2d3d5",
      },
    },
  },
  plugins: [],
};
