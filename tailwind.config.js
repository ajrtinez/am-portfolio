module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'gelasio': ['Gelasio', 'serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        darkGrey: '#121212',
        offWhite: '#F4F4EC',
        pastelGreen: '#B8EE96'
      }
    },
  },
  plugins: [],
}
