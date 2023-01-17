/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
      },
      colors: {
        mpbeige: '#ffefdc',
        mpdarkblue: '#252e50',
        mplightblue: '#558cae',
        mpgreen: '#bfc7b4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
