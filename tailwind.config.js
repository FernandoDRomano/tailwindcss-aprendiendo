const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate:{
        '360': '360deg'
      },
      width: {
        '520': '520px',
      }, 
      spacing:{
        '420': '420px'
      }, 
      colors:{
        orange: colors.orange
      },
      fontFamily: {
        sans: [
          'Inconsolata',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontWeight: ['active'],
      scale: ['group-hover'],
      rotate: ['group-hover'],
      fill: ['hover', 'focus'],
      blur: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
      height: ['hover', 'focus'],
      translate: ['group-hover'],
      margin: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
