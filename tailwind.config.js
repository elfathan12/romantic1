/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12020a",
        velvet: "#210511",
        wine: "#3d081d",
        burgundy: "#5c1029",
        blush: "#ffc2d4",
        roseMist: "#ffe8ef",
        champagne: "#f3cf8e",
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Poppins"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        romantic: "0 24px 80px rgba(255, 111, 159, 0.18)",
        glow: "0 0 34px rgba(255, 178, 204, 0.34)",
        gold: "0 0 28px rgba(243, 207, 142, 0.28)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 194, 212, 0.18)" },
          "50%": { boxShadow: "0 0 42px rgba(255, 194, 212, 0.42)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
