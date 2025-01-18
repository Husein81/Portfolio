/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shark: "#1a1a1a",
        primary: "#2a2a2a",
        mountainMeadow: "#1EA977",
        iron: "#8e8e8e",
      },
    },
  },
  plugins: [],
};
