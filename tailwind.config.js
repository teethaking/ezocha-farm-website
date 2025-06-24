/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farm-green': '#1A3C34', // Deep green for rustic feel
        'farm-cream': '#FDF6E3', // Cream for backgrounds
        'farm-brown': '#4A3728', // Earthy brown
      },
    },
  },
  plugins: [],
}