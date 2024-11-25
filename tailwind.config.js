/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'montserrat',
        'poppins': 'poppins',
        'bebasNeue': 'bebasNeue',
      },
      // keyframes:{
      //   rotate : {
      //     '0%': {
      //       transform: 'rotate(0deg)',
      //     },
      //     '50%': {
      //       transform: 'rotate(90deg)',
      //     },
      //     '100%': {
      //       transform: 'rotate(0deg)',
      //     }
      //   }
      // },
      // animation:{
      //   'rotate-animation': 'rotate-animation 5s ease-in-out',
      // }
    },
  },
  plugins: [],
}

