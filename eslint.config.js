import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true, // This will tell Prettier to remove semicolons
          endOfLine: 'auto',
        },
      ],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
];
