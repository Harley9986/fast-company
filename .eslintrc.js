module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["off"],
        semi: [2, "always"],
        "space-before-function-parent": ["off"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "react/prop-types": ["off"],
        "import/no-duplicates": ["warn"],
        "no-unused-vars": ["warn"],
        "no-console": ["warn"],
        "prefer-const": ["warn"],
        "space-before-function-paren": ["off"]
    }
};
