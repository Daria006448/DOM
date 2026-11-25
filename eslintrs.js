module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: 'eslint:recomended',
    parserOption: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules : {
        'no-unuset-vars': 'error',
    },
};