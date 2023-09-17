/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: ["./tsconfig.json", "./next.config.js"],
  },
};
