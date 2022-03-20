module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: '#010203', // navbar
        primary: '#0282e7',
        dark: '#18273F', // inside color
        myred: '#FF4848', //border
        myyellow: '#FFD371', // text
        myteal: '#1CC5DC', // text
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      '2xl': { max: '1835px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
