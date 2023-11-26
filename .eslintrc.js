/** @format */

module.exports = {
  root: true,
  extends: [
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["eslint-comments", "promise", "prettier", "unused-imports"],
  overrides: [
    {
      files: ["*.js", "*.ts"],
      rules: {
        "no-undef": "off",
        "import/extensions": ["off"],
        "import/order": "off",
        "unused-imports/no-unused-imports": "error",
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
  ],
};
