/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
      Inter_2: ["Inter Tight", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      // Halvetica: ["Questrial", "sans-serif"],
      Halvic: ["HelveticaNeueRoman", "sans-serif"],
    },
    colors: {
      blue: "#121521",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
