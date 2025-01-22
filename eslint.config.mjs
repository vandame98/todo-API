import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest"
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "eqeqeq": "error",
      "no-console": "warn",
      "indent": ["error", 2]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier
];
