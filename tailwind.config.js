/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#083a64",
        secondary:"#36d4bf"
      },
      fontFamily:{
        primary:['PirateOne','sans-serif'],
        sec:['Geo','sans-serif']
      }
    },
  },
  plugins: [],
};
