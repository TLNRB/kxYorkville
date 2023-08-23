/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '560px',
      md: '768px',
      lg: '1060px',
      xl: '1200px',
      xxl: '1440px',
      xxxl: '1600px'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif']
    },
    extend: {
      colors: {
        bgNavBlack: '#000000da',
        bgMenuBlack: '#282828',
        textLight: '#f4f4f4',
        textDarker: '#606060'
      }
    }
  },
  plugins: []
}
