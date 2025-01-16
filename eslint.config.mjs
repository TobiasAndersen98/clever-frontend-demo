import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from " eslint-plugin-import";
import eslintPluginPreferArrow from "eslint-plugin-prefer-arrow";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import eslintPluginStorybook from "eslint-plugin-storybook";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["**/tailwind-base.js"],
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      "prefer-arrow": eslintPluginPreferArrow,
      "unused-imports": eslintPluginUnusedImports,
      tailwindcss: eslintPluginTailwindcss,
      storybook: eslintPluginStorybook,
      "@typescript-eslint": eslintPluginTypescript,
    },
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    extends: [
      "eslint:recommended",
      "next/core-web-vitals",
      "plugin:tailwindcss/recommended",
      "plugin:storybook/recommended",
      "plugin:@typescript-eslint/recommended-type-checked",
      "prettier",
    ],
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "import/order": [
        "error",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },
          groups: [
            ["external", "internal"],
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
      "no-console": "warn",
      "prefer-arrow/prefer-arrow-functions": "error",
      "prettier/prettier": ["error"],
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
    },
  },
  {
    files: ["*.data.ts", "*.data.tsx", "*.stories.tsx"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    excludedFiles: ["*.types.ts", "*.d.ts", "*.data.ts"],
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
        },
      ],
    },
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    excludedFiles: [
      "*.types.ts",
      "*.d.ts",
      "*.stories.tsx",
      "page.tsx",
      "layout.tsx",
    ],
    rules: {
      "no-restricted-exports": [
        "error",
        {
          restrictDefaultExports: { direct: true },
        },
      ],
    },
  },
  {
    files: ["src/app/api/**/*.ts", "src/app/api/**/*.tsx"],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
