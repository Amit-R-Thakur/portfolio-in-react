/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 1px #8A2BE2, 0 0 3px #8A2BE2, 0 0 4px #8A2BE2',
      },
    },
  },
  plugins: [],
}