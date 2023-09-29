const prettierConfig = require("./.prettierrc")

module.exports = {
    root: true,
    extends: ["@bcgov-elmsd/eslint-config"],
    parserOptions: { project: "tsconfig.json", tsconfigRootDir: __dirname, sourceType: "module" },
    rules: {
        "prettier/prettier": ["error", prettierConfig],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-shadow": "off"
    },
    ignorePatterns: ["**/dist/**/*.js"]
}
