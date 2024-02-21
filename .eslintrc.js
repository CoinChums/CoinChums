module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'no-unused-vars': ['warn', { vars: 'all', args: 'all' }],
    'semi': ['warn', 'always'],
  },
};
