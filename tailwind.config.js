/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        backgroundImg:"url('./src/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}

