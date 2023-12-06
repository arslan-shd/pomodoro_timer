/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timer: "#1e213f",
        tab: "#161932",
        accent: "#f87070",
        timerShadow: "#121530;",
      },
    },
  },
  plugins: [],
};
