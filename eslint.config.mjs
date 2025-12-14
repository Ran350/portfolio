import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Next.js recommended rules (+ CWV)
  ...nextCoreWebVitals,
  // TypeScript rules used by Next
  ...nextTypescript,
  // Disable any formatting-related rules that conflict with Prettier
  prettier,
  {
    rules: {
      // Project preference
      "@next/next/no-img-element": "off",
    },
  },
]);
