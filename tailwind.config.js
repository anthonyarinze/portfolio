/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        90: "96%",
      },
      width: {
        90: "96%",
      },
      backgroundColor: {
        "bg-main": "#1d1d20",
        "background-color": "rgb(48,47,47)",
        "card-color": "#132d42",
      },
      colors: {
        "card-text": "#51c9bf",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
