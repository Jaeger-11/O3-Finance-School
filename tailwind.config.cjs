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
      backgroundImage:{
        'mobile-update-bg': "url(/mobile-updates-bg.png)",
        'desktop-update-bg': "url(/desktop-update-bg.png)"
      },
      colors: {
        lightblue:"#0040FF",
        dark1: "#434343",
        dark2: "#3E3E3E",
      },
      fontFamily:{
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}
