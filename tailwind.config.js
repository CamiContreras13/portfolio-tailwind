/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["*"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
      },
      fontFamily:{
        comic: ['Comic Neue', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};

