const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rc-black': '#231f20',
        'rc-white': '#FFFFFF',
        'rc-pink': '#ba1d4e',
        'rc-yellow': '#e2824b',
        'rc-green': '#2a8d69',
        'rc-blue': '#58b9bc',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],

  
}
