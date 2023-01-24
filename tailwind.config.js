/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    colors:{
      'mild-violet': '#5f0aa8',
    },
      fontFamily:{
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'poppins': ['Poppins','sans-serif'],
        'tangerine':['Tangerine', 'cursive'],
        'garamond':['EB Garamond', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
