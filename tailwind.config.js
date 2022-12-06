/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgDark": "#010b14",
      },
      height: {
        '45': "45vh",
        '1px':"1px"
      },
      width:{
        'container':'90%',
        '95':'95%',
        '2.5':'2.5%',
      },
      borderRadius:{
        "curve":"50%"
      }
    },
  },
  plugins: [],
}
