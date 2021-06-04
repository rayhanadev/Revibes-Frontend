module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: 'Rubik, sans-serif',
        mono: 'Inconsolata, monospace',
      },
      colors: {
        blue: {
          DEFAULT: '#C1E8ED',
          dark: '#01A0B6',
        },
        black: '#171717',
        gray: '#393939',
      },
      flex: {
        2: '1 1 40%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
