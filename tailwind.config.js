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
        darkGreyHover: '#4B4B4B',
        white: '#FFFFFF',
        lightGrey: '#F4F4F4',
        pastelGreen: '#A4E772',
        pastelGreenHover: '#8EE151',
        makrViolet: '#D2CAFB',
        makrVioletHover: '#C0B6F7'
      }
    },
  },
  plugins: [],
}
