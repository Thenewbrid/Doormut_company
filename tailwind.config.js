/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {},
    fontFamily:{
   Poppins: ["Poppins", "sans-serif"],
   Quicksand: ["Quicksand", "sans-serif"],
   Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}

