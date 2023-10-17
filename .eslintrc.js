module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    // 'no-console': ['error', {allow: ['warn', 'error', 'info']}],
    eqeqeq: 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-key': 'error',
    'dot-notation': 'error',
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
