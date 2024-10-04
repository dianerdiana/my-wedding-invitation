/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        gold: "#CBA35C",
        brown: "#7b6945",
      },
      fontFamily: {
        trebuc: ["Trebuchet MS", "sans-serif"],
        stalemate: ["Stalemate", "sans-serif"],
        analogue: ["Analogue", "sans-serif"],
        allema: ["Allema", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        gendis: ["Gendis", "sans-serif"],
        lucian: ["Lucian", "sans-serif"],
        cinzel: ["Cinzel", "sans-serif"],
      },
      letterSpacing: {
        "3_8": "3.8px",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "pulse-scale": "pulseScale 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
