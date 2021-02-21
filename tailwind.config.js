module.exports = {
 purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#9C5EEB',
        secondary: '#1E2022',
        gray: {
          darkest: '#131315',
          dark: '#181818',
          default: '#474747',
          light: '#5E5E5E',
          lightest: '#B7B7B7',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
