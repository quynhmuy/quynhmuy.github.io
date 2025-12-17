/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#85b4e6',
        'custom-blue-dark': '#6a9cd4',
        'custom-blue-light': '#a8c9f0',
      }
    },
  },
  plugins: [],
}