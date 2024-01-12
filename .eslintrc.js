module.exports = {
    root: true,

    parserOptions: {
        project: './tsconfig.json',
    },

    extends: [
        'plugin:eslint-comments/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],

    plugins: [
        'eslint-comments',
        'unused-imports',
        '@typescript-eslint',
        'eslint-plugin-tsdoc',
    ],

    rules: {
        'no-undef': 'off',
        'import/extensions': ['off'],
        'import/order': 'off',
        'unused-imports/no-unused-imports': 'error',
        'tsdoc/syntax': 'error',
    },
};
