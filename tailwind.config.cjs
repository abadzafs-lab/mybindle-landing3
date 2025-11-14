/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A53",
        neutralSoft: "#F2F2F2",
        neutralText: "#222222",
      },
      fontFamily: {
        sans: ["Open Sans", "Poppins", "system-ui", "sans-serif"],
        display: ["Outfit", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
