module.exports = {
  plugins: {
    // Tailwind v4 moved the PostCSS plugin to a separate package.
    // Use the new package name so PostCSS loads the correct plugin.
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
