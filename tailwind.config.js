module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '60': '15rem', // Assuming 1rem = 4px, 15rem would be 60px
      },
      colors: {
        primary: "#4A3AFF",
        yellow : "#f6c945",
        purple : "#3e0652",
        lightPurple : "#D8BfD8",
        lightGray : '	#A9A9A9'
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
  plugins: [],
};
