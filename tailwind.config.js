module.exports = {
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
        'primaryLight': '#FEFEFE',
        'colorAccent': '#5CD2C6',
        'gray': '#DFE3EE',
      },
      boxShadow: {
        linkHover: 'inset 100px 0 0 0 #5CD2C6',
      },
    },
  },
  plugins: [],
}