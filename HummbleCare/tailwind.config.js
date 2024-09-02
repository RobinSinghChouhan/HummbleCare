/** @type {import('tailwindcss').Config} */
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
      gridTemplateColumns: {
        '20': 'repeat(20,minmax(0,1fr))'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
    },
  },
  plugins: [],
}

