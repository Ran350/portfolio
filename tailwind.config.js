module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        opensans: [
          "Open Sans",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        telex: [
          "Telex",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        aiiro: "#004C71",
      },
    },
  },
  plugins: [],
};
