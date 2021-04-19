module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {
      colors: {
        "gray-a": '#B9B9B9',
        sky: '#24CCF1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
