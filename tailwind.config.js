/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },
      colors: {
        "main-bg": "rgb(36,36,36)",
        "main-gray": "#333333",
        "main-lightergray": "#292929",
        "main-orange": "#F7AB0A",
      },
    },
  },
  plugins: [],
};
