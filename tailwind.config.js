/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'crocante-gold': '#d4af37',
        'crocante-dark': '#2c2c2c', // Para textos legibles
        'marble-white': '#fdfdfd',
      },
      backgroundImage: {
        // Este es el "truco" para el efecto mármol sutil
        'marble-pattern': "radial-gradient(circle at 50% 50%, rgba(200, 200, 200, 0.05) 0%, transparent 80%), linear-gradient(120deg, #fdfdfd 0%, #f5f5f5 100%)",
      }
    },
  },
  plugins: [],
}