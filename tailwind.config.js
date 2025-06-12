/** @type {import('tailwindcss').Config} */ 
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'vermelhoTNH1': '#FC1825',
      'azulTNH1': '#01303F',
      'bejeTNH1': '#F7EDE2',
      'cinzaClaroTNH1': '#373737',
      'cinzaEscuroTNH1': '#242424',
    },
    extend: {},
  },
  plugins: [],
});
