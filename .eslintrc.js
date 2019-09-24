module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // 0 = off, 1 = warning, 2 = error
    'ban-ts-ignore': 0,
    'no-explicit-any': 0,
    eqeqeq: 1,
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 1,
    semi: [1, 'never'],
    'semi-spacing': [1, { before: false, after: true }],
    'arrow-spacing': [1, { before: true, after: true }],
    'keyword-spacing': [2, { before: true, after: true }],
    'no-var': 2,
    'object-curly-spacing': [
      1,
      'always',
      { arraysInObjects: false, objectsInObjects: false },
    ],
    'prefer-const': 2,
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
