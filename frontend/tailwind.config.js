module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#393f47',
      white: '#f9f9f9',
      gray: {
        100: '#ecedee',
        200: '#dfe0e2',
        300: '#d1d3d4',
        400: '#c1c3c6',
        500: '#b0b3b6',
        600: '#9ca0a4',
        700: '#85898e',
        800: '#676c72',
      },
      blue: {
        '000': '#e8f2ff',
        100: '#d0e4ff',
        200: '#b5d5ff',
        300: '#96c4ff',
        400: '#72afff',
        500: '#4495ff',
        600: '#3d86e6',
        700: '#3575c9',
        800: '#2c61a6',
        900: '#1f4577',
      },
      indigo: {
        '000': '#edecff',
        100: '#dad7ff',
        200: '#c3bfff',
        300: '#a9a3ff',
        400: '#877eff',
        500: '#5044ff',
        600: '#483de5',
        700: '#3e35c8',
        800: '#332ba4',
        900: '#241e73',
      },
      teal: {
        '000': '#ebfff6',
        100: '#d5ffed',
        200: '#bdffe2',
        300: '#a0ffd5',
        400: '#7bffc5',
        500: '#44ffae',
        600: '#3de79d',
        700: '#36cb8a',
        800: '#2da973',
        900: '#207b54',
      },
    },
    fontSize: {
      sm: ['0.875rem', '1.5rem'],
      base: ['1.125rem', '1.75rem'],
      md: ['1.125rem', '1.5rem'],
      lg: ['1.25rem', '1.5rem'],
      xl: ['1.5rem', '1.5rem'],
      '2xl': ['2rem', '3rem'],
      '3xl': ['2.5rem', '3rem'],
      '4xl': ['3rem', '3rem'],
    },
    fill: (theme) => ({
      'indigo-light': theme('colors.indigo.300'),
      'indigo-base': theme('colors.indigo.500'),
      current: 'currentColor',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 1rem',
          '@screen sm': {
            maxWidth: '36rem',
          },
          '@screen md': {
            maxWidth: '36rem',
          },
          '@screen lg': {
            maxWidth: '48rem',
          },
          '@screen xl': {
            maxWidth: '48rem',
          },
          '@screen 2xl': {
            maxWidth: '48rem',
          },
        },
      });
    },
    function ({ addBase, theme }) {
      addBase({
        body: { color: theme('colors.black') },
      });
    },
  ],
};
