/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          50: '#fbf6e7',
          100: '#f4e4bc',
          200: '#ebd28a',
          300: '#dfba56',
          400: '#d4af37',
          500: '#c9a227',
          600: '#a67c00',
          700: '#7a5d10',
          800: '#54400b',
          900: '#2d1f04',
        },
        marble: '#faf7f2',
        ink: '#2d251c',
        sage: '#7a8471',
        // legacy aliases (in case anywhere still references them)
        'crocante-gold': '#d4af37',
        'crocante-dark': '#2c2c2c',
        'marble-white': '#faf7f2',
      },
      boxShadow: {
        'gold-soft': '0 22px 55px -18px rgba(166, 124, 0, 0.25), 0 8px 22px -10px rgba(45, 31, 4, 0.08)',
        'gold-glow': '0 0 0 1px rgba(212, 175, 55, 0.18), 0 30px 60px -22px rgba(166, 124, 0, 0.4)',
        'card':     '0 1px 0 rgba(255,255,255,0.55) inset, 0 18px 40px -24px rgba(45, 31, 4, 0.18)',
        'inner-gold': 'inset 0 0 0 1px rgba(212, 175, 55, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '0.45' },
          '50%':      { opacity: '0.95' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.95s cubic-bezier(0.22, 1, 0.36, 1) both',
        'shimmer': 'shimmer 4.5s ease-in-out infinite',
        'float':   'float 6.5s ease-in-out infinite',
        'sway':    'sway 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
