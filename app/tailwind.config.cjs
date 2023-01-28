/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06283D",
        secondary: "#256D85",
        thirty: "#1572A1",
        "light-blue": {
          100: "#DFF6FF",
          200: "#47B5FF",
        },
      },
    },
  },
  plugins: [],
};
