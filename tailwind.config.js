module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '20p': '25%',
        '80p': '70%',
        '3/10': '30%',
        '7/10': '70%',
        '080p': '60%'
      },
      spacing: {
        '60': '15rem', // Assuming 1rem = 4px, 15rem would be 60px
        '7.5': '1.875rem',
        
      },
      colors: {
        primary: "#4A3AFF",
        yellow : "#f6c945",
        purple : "#3e0652",
        lightPurple : "#D8BfD8",
        lightGray : '	#A9A9A9',
        veryLightGray : '#5f5f5f',
        lightestGray : "#D3D3D3"
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
  plugins: [],
};
