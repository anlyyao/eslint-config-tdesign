const typescriptRule = require('./rules/typescript');

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...typescriptRule,
  },
};
