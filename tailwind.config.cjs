/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkblue: "#002478",
        sharpblue:"#4A0DFF",
        lightblue:"#E6F3FF",
        lightgreen:"#3ACF01"
      },
      fontFamily:{
        alternate: ['Montserrat Alternates', 'sans-serif']
      }
    }
  },
  plugins: [],
}
