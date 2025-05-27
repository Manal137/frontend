/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        red: {
          light: "#EF4444",
          DEFAULT: "#DC2626",
          dark: "#991B1B"
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
      },
    },
  },
  plugins: [],
}
 