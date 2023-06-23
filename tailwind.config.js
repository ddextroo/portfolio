const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primaryDark': '#363653',
        'primaryDarkLight': '#52527d',
        'primaryLight': '#FEFEFE',
        'colorAccent': '#5CD2C6',
        'gray': '#DFE3EE',
        'projectColor': '#4AE290',
      },
      boxShadow: {
        linkHover: 'inset 100px 0 0 0 #5CD2C6',
      },
    },
  },
  plugins: [],
});