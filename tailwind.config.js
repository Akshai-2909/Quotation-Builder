/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'tangerine':['Tangerine', 'cursive'],
        'garamond':['EB Garamond', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
