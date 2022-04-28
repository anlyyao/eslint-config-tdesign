module.exports = {
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发时，程序会退出)

  // import config
  'import/no-extraneous-dependencies': 'off',
  'import/order': 'error',
  'import/extensions': 'off',
  'import/no-named-as-default': 'off',
  'import/prefer-default-export': 'off',
  'import/no-cycle': 'off', // TODO: turn on this rule later
  'import/no-unresolved': 'off', // TODO: turn on this rule later
  'import/no-relative-packages': 'off',
  'import/export': 'off',
  'import/no-dynamic-require': 'off',

  // code style config
  'max-len': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-bitwise': 'off',
  'no-useless-return': 'off',
  'no-plusplus': 'off',
  'no-continue': 'off',
  'no-return-assign': 'off',
  'no-restricted-syntax': 'off',
  'no-restricted-globals': 'off',
  'no-unneeded-ternary': 'off',
  'eol-last': 'error', // codecc
  'func-names': 'off',
  'consistent-return': 'off',
  'default-case': 'off',
  camelcase: 'off',
  'no-console': [
    2,
    {
      allow: ['warn', 'error'],
    },
  ],
  'no-param-reassign': 'off',
  'no-underscore-dangle': 'off',
  'no-unused-vars': 'off',
  'guard-for-in': 'off',
  'default-param-last': 'off',
  'prefer-spread': 'off',
  'no-new': 1,
  'new-cap': 'off',
  'no-confusing-arrow': 'off',
  'func-style': 'off',
  'prefer-default-export': 'off',
  'no-useless-constructor': 'off',
  treatUndefinedAsUnspecified: 'off',
  'no-use-before-define': [
    'off',
    {
      functions: false,
      classes: false,
    },
  ],
  'no-proto': 'off',
  'global-require': 'off',
  'no-constant-condition': [
    'error',
    {
      checkLoops: false,
    },
  ],
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // 非开发模式禁用debugger
  'number-leading-zero': 'off',
  'object-shorthand': 'off',
  'class-methods-use-this': 'off',
  'no-undef': 'off',
  eqeqeq: [
    'error',
    'always',
    {
      null: 'ignore',
    },
  ],

  'no-promise-executor-return': 'off',
  'prefer-regex-literals': 'off',
  'no-unsafe-optional-chaining': 'off',
};
