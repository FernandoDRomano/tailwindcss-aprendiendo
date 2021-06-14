module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '520': '520px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontWeight: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
