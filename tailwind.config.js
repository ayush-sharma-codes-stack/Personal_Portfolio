/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
        violet: { 500: '#8b5cf6', 600: '#7c3aed' },
      }
    },
  },
  plugins: [],
}
