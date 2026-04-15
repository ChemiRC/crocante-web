/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crocante-dark': '#1a1a1a', // Fondo oscuro para contrastar
        'crocante-gold': '#d4af37', // Tono miel para resaltar precios y promociones
        'crocante-cream': '#f4f1eb', // Tono suave para los textos
      },
      fontFamily: {
        'serif': ['"Great Vibes"', 'serif'], // Fuente para los títulos y el logo
      }
    },
  },
  plugins: [],
}