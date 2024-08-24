/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all files using Tailwind classes
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        azure: "#F0FFFF",
      },
      fontFamily: {
        mona: [
          '"Mona Sans"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        slideIn: {
          from: { transform: "translateY(-50px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out",
        fadeInUp: "fadeInUp 2s ease-in-out",
        pulse: "pulse 3s infinite",
      },
    },
  },
  plugins: [],
};
