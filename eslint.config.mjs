import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import airbnb from "eslint-config-airbnb";
import airbnbTypeScript from "eslint-config-airbnb-typescript"; // For TypeScript support
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Apply Airbnb to all JS/TS files
    plugins: {
      import: eslintPluginImport,
      "jsx-a11y": eslintPluginJsxA11y,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json", // Required for airbnb-typescript
      },
    },
    rules: {
      ...airbnb.rules,
      ...airbnbTypeScript.rules, // Add TypeScript specific rules
      // You can override or add more rules here
      "react/react-in-jsx-scope": "off", // Next.js 17+ doesn't require React in scope
      "react/jsx-props-no-spreading": "off", // Optional: allow prop spreading
      "import/extensions": [ // Ensure consistent import extensions
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
  },
];

export default eslintConfig;
