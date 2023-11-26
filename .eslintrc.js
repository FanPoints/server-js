module.exports = {
    root: true,

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    extends: [
        'standard',
        'plugin:eslint-comments/recommended',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],

    plugins: [
        'eslint-comments',
        'promise',
        'unused-imports',
        '@typescript-eslint',
    ],

    rules: {
        'no-undef': 'off',
        'import/extensions': ['off'],
        'import/order': 'off',
        'unused-imports/no-unused-imports': 'error',

        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-param-name': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-property-name': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-check': 'off',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-yields': 'off',
        'jsdoc/require-yields-check': 'off',
    },
};
