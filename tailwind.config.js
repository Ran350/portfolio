module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    extend: {
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
