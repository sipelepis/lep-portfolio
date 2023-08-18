const colors = require('tailwindcss/colors');
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9FAFB',
        'secondary': '#000',
        'tertiary': '#10B981',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.neutral,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
      defaultColors,
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#F9FAFB',
        'secondary': '#000',
        'tertiary': '#10B981',
      },
    },
    
  },
  plugins: [ 
    require('@tailwindcss/forms')
  ],
}