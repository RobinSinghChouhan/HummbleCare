/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridColumn: {
        'span-17':'span 17 / span 17'
      },
      width: {
        '20': '5rem',
        '108':'27rem'
      },
      height: {
        '108':'27rem',
        '120': '30rem',
        '160':'40rem',
      },
      gridTemplateColumns: {
        '20': 'repeat(20,minmax(0,1fr))'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
      colors:{
        'logo-color': '#379A16'
      },
      border:{
        width:1
      }
    },
  },
  plugins: [],
}

