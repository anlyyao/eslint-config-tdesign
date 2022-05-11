const vueRule = require('./rules/vue');

module.exports = {
  extends: ['./base', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  globals: {
    cy: 'readonly',
    clipboardData: 'readonly',
    PKG_VERSION: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    ...vueRule,
    'no-console': 'off', // TODO: turn on this rule later
    '@typescript-eslint/no-unused-vars': 'off', // TODO: turn on this rule later
    '@typescript-eslint/no-use-before-define': 'off', // TODO: turn on this rule later
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/component-name-in-template-casing': [2, 'kebab-case'],
        'vue/require-default-prop': 0,
        'vue/multi-word-component-names': 0,
        'vue/no-reserved-props': 0,
      },
    },
    {
      files: ['**/demos/*', 'script/**/*', 'script/*', '*.js', 'site/**/*', 'site/*'],
      rules: {
        'no-var-requires': 0,
        'no-console': 0,
        'no-unused-expressions': 0,
        'no-alert': 0,
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        'prefer-spread': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
    {
      files: ['*.test.js'],
      rules: {
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
      },
    },
    {
      files: '*',
    },
  ],
};
