const vueRule = require('./rules/vue');

module.exports = {
  extends: ['./base', 'plugin:vue/essential', '@vue/typescript/recommended'],
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  globals: {
    cy: 'readonly',
    __VERSION__: true,
  },
  settings: {
    'import/resolver': {
      node: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    ...vueRule,
    '@typescript-eslint/no-use-before-define': 'off', // TODO: turn on this rule later
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 2,
        'vue/html-indent': [2, 2],
        'vue/return-in-computed-property': 1,
        'vue/order-in-components': 2,
        'vue/component-name-in-template-casing': [2, 'kebab-case'],
        'vue/require-default-prop': 0,
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
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        'prefer-spread': 'off',

        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/type-annotation-spacing': 1,
      },
    },
  ],
};
