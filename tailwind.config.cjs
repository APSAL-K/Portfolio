/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Spider-Verse inspired palette — deep black, electric red, neon blue
        primary: "#08080d",
        secondary: "#9aa3c7",
        tertiary: "#101019",
        "black-100": "#0c0c14",
        "black-200": "#050509",
        "white-100": "#f3f3f3",
        accent: "#ff2247", // electric red
        "accent-dark": "#c4102e",
        neon: "#00d4ff", // neon blue
        "neon-dark": "#0a85b8",
        glass: "rgba(255,255,255,0.04)",
      },
      fontFamily: {
        display: ["Orbitron", "Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 30px 90px -20px rgba(255,34,71,0.25)",
        "glow-red": "0 0 25px rgba(255,34,71,0.45)",
        "glow-blue": "0 0 25px rgba(0,212,255,0.45)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "grid-pan": "grid-pan 8s linear infinite",
      },
    },
  },
  plugins: [],
};
