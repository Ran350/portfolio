/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "@next/next/no-img-element": "off",
  },
};
