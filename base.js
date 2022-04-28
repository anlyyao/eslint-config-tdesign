const javascriptRule = require('./rules/javascript');

module.exports = {
  root: true,
  extends: ['eslint-config-airbnb-base'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    ...javascriptRule,
  },
};
