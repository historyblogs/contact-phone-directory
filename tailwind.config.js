/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        'xs': {'min': '320px', 'max': '425px'},
        'sm': {'min': '425px', 'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
      }
    },
  },
  plugins: [],
};
