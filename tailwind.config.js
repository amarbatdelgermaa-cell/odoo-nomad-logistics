/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d97706",
        secondary: "#78350f",
        dark: "#1c1917",
        // CSS variables-г Tailwind-д нэмэх
        'custom-text': 'var(--text)',
        'custom-bg': 'var(--bg)',
        'custom-accent': 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--sans)'],
        mono: ['var(--mono)'],
      },
      boxShadow: {
        'custom': 'var(--shadow)',
      },
      borderColor: {
        'custom': 'var(--border)',
      },
    },
  },
  plugins: [],
}