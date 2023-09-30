const prettierConfig = require("./.prettierrc")

module.exports = {
  root: true,
  extends: ["@bcgov-elmsd/eslint-config"],
  parserOptions: { project: "tsconfig.json", tsconfigRootDir: __dirname, sourceType: "module" },
  rules: {
    "prettier/prettier": ["error", prettierConfig],
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-console": "off",
    "react/no-danger": "off"
  },
  ignorePatterns: ["**/dist/**/*.js"]
}
