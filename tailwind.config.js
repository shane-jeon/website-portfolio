/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calmGreen: "#bad7b9",
        darkSeaGreen: "#9AC599",
        spanishGreen: "#88967E",
      },
      borderWidth: {
        12: "12px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
