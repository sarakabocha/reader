/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "noto-serif-kr": ["Noto Serif KR", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
