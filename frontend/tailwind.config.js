/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorCorrect: '#58a351',
        colorPosition: '#f7da21',
        colorFail: '#787c7e'
      }
    },
  },
  plugins: [],
}

