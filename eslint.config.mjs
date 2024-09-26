export default [
    {
      files: ['**/*.js'],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2021, // Atualize para suportar a sintaxe mais recente
          sourceType: 'module',
        },
        globals: {
          cy: 'readonly',
          Cypress: 'readonly',
          require: 'readonly',
          module: 'readonly',
          top: 'readonly',
        },
      },
      rules: {
        'no-useless-escape': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'error',
      },
    },
    {
      files: ['cypress/e2e/elements/*.js'],
      rules: {
        'no-useless-escape': 'off',
      },
    },
    {
      files: ['cypress/e2e/hooks.cy.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ];
  