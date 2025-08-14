/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: '16px', // default font size
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        text: '#ff0000ff', // default black text color
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        large: '1024px',
      },
    },
  },
  plugins: [
    '@tailwindcss/forms'
  ],
}
