/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        m: '500px',

        t: '700px',

        l: '768px',

        d: '1000px',

        ld: '1200px',

        tv: '1366px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gry: '#f9f9f9',
        'lght-wht': '#EAEBEB',
        'lght-blk': '#222831',
        blue: '#147efb',
      },
      boxShadow: {
        shdw: '0 0 10px rgba(0, 0, 0, .09)',
        'shdw-lg': '0 0 10px rgba(0, 0, 0, .1);',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
