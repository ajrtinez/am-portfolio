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
      backgroundImage: {
        'noise-overlay': "url('/assets/img/noise.png')"
      },
      colors: {
        darkGrey: '#121212',
        darkGreyHover: '#4B4B4B',
        white: '#FFFFFF',
        whiteHover: '#F3F3F3',
        lightGrey: '#F4F4F4',
        bgHoverGrey: '#E5E5E5',
        dashGrey: '#DCDEDF',
        bgGrey: '#FAF8F5',
        makrViolet: '#D2CAFB',
        makrVioletHover: '#C0B6F7'
      }
    },
  },
  plugins: [],
}
