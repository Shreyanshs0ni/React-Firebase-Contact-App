/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FA7D09",
        "dark-orange": "#FF4301",
        brown: "#4A3F35",
        "dark-brown": "#2F2519",
      },
    },
  },
  plugins: [],
};
