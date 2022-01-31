module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]

      },
      colors: {
        'blackp': '#1C1C1C',
        'pinky': '#EA4D6F',
        'orange': '#E6696D',
        'dark-green1': '#03707D',
        'aqua': '#55B1A2',
        'blanquito': '#E8E6E4',

      },

    },
  },
  plugins: [
    
    // require('@tailwindcss/aspect-ratio')
  ],
}
