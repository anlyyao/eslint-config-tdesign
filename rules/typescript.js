module.exports = {
  // typescript config
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/indent': ['off', 2],
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-unused-vars': 'error', // codecc
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
  ],

  '@typescript-eslint/ban-ts-ignore': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/prefer-as-const': 'off',
  '@typescript-eslint/no-empty-interface': 'off', // TODO: turn on this rule later
  '@typescript-eslint/no-extra-semi': 'off',
};
