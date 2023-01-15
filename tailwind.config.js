/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'homeblue': '#bcd9d8',
      'homegray': '#fafafa',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
