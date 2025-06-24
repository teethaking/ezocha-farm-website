/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farm-green': '#2E7D32', // Deep green for agriculture
        'farm-gold': '#F4A261',  // Gold for harvest
        'farm-brown': '#8B4513', // Earthy brown
      },
    },
  },
  plugins: [],
}