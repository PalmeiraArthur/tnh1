/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '5px',
    },
    colors: {
      'vermelhoTNH1': '#FC1825',
      'azulTNH1': '#01303F',
      'begeTNH1': '#F7EDE2',
      'cinzaClaroTNH1': '#373737',
      'cinzaEscuroTNH1': '#242424',
      'hover' : '#2F2F2F',
    },
    extend: {
      dropShadow: {
        '4xl': ['0 0px 10px rgba(0, 0, 0, 0.7)']
      }
    },
  },
plugins: [],
}
