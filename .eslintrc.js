/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./next.config.js"],
  },
  extends: [
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: { version: "detect" },
  },
  rules: {},
};
