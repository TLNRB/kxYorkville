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
      xxxl: '1600px',
      xxxxl: '2000px'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif']
    },
    extend: {
      colors: {
        bgDark: '#202020',
        bgHoverDark: '#505050',
        textLight: '#f4f4f4',
        textGray: '#E1E1E1',
        textNormal: '#dddddd',
        textDarker: '#606060',
        textDark: '#30303055',
        primaryColor: '#D9A404'
      }
    }
  },
  plugins: []
}
