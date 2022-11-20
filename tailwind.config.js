/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      colors: {
        transparent: "transparent",
        dark: "#040406",
        lightBlue: "#ABCCFF",
        lightTan: "#D3B4A2",
        accent: "#925707",
      },
    },
    extend: {},
  },
  plugins: [],
};
