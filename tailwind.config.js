module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Roboto Condensed', 'sans-serif'],
      body: ['Proxima Nova', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'orange-primary': 'var(--orange-primary)',
        'orange-secondary': 'var(--orange-secondary)',
        'dark-gradient': 'var(--dark-gradient)',
        'orange-gradient': 'var(--orange-gradient)',
        'fade': 'var(--grey)'
      },
      gridTemplateColumns: {
        'stats': 'minmax(770.8px, 1110px) minmax(229.2px, 306px)'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
