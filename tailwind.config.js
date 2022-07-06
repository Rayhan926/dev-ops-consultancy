/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD645",
        dark: "#171A21",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
