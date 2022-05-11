const reactRule = require('./rules/react');

module.exports = {
  extends: [
    './base',
    'prettier', // eslint-config-prettier 处理冲突
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react-hooks', 'lodash'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    ...reactRule,
  },
};
