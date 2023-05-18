module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "airbnb",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@": "./src",
          "@components": "./src/components",
          "@styles": "./src/styles",
        },
        extensions: [".js", ".jsx"],
        packages: ["packages/*"],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off", // 임시로 추가
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react-refresh/only-export-components": "warn",
    "linebreak-style": "off",
    quotes: "off",
    "no-use-before-define": "off",
    "comma-dangle": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
