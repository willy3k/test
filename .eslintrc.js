module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': 'off', // esses dois esta relacionado ao tipo jsx
    'react/react-in-jsx-scope': 'off', //
    'import/prefer-default-export': 0, // relacionado a funções padroes
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    // 'react/jsx-no-bind': 0,
  },
};
