import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: { globals: globals.node },
    },
    {
        plugins: {
            "@stylistic/js": stylisticJs,
        },
    },
    {
        rules: {
            semi: ["error", "always"],
            indent: ["error", "tab"],
            eqeqeq: ["error", "always"],
            camelcase: ["error"],
            indent: ["error", 2],
            "@stylistic/js/indent": ["error", 2],
        },
        linterOptions: {
            reportUnusedInlineConfigs: "error",
        },
        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",
        },
    },
]);
