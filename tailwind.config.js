/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/views/**/*.ejs', './src/**/*.js', './src/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate'],
  },
}
