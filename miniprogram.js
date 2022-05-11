module.exports = {
  extends: ['./base', 'plugin:prettier/recommended'],
  plugins: ['import'],
  globals: {
    require: true,
    Page: true,
    wx: true,
    App: true,
    getApp: true,
    getCurrentPages: true,
    Component: true,
    getRegExp: true,
    Behavior: true,
  },
  rules: {},
  overrides: [
    {
      files: ['script/**'],
      rules: {
        // node 环境下支持 require
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['example/**'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
