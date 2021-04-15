module.exports = {
  purge: [
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
