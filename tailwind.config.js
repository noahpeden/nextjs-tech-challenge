/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#424C5D',
          lighter: '#6B7A8C',
          darker: '#2B3642',
        },
        secondary: {
          DEFAULT: '#ACCBD7',
          lighter: '#D6E9EF',
          darker: '#7BA9B9',
        },
        accent: {
          DEFAULT: '#DA6E42',
          lighter: '#F49C76',
          darker: '#A84D27',
        },
      },
    },
  },
  plugins: [],
};
