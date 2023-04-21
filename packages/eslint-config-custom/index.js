module.exports = {
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  extends: [
    'next',
    'turbo',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:cypress/recommended',
    'plugin:import/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: [
    '**/*/__generated__/',
    '*.generated.*',
    '*.config.*',
    'e2e/**/*',
    'dist/**/*',
    'package*',
    'ios/**/*',
    '@types',
    'android/**/*',
  ],
  plugins: ['@typescript-eslint', 'tailwindcss', 'cypress', 'sort-keys-fix'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'import/consistent-type-specifier-style': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-namespace': 'error',
    'import/no-relative-packages': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'react/jsx-curly-brace-presence': [
      1,
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
  },
  overrides: [
    {
      excludedFiles: [
        'app/api/**/*',
        'config/appConfig.ts',
        'cypress.config.ts',
        'cypress/**/*',
        'middleware.page.ts',
        'pages/api/**/*',
        'script/**/*',
        'service/**/*',
      ],
      extends: ['plugin:lodash/recommended'],
      files: ['*.ts', '*.tsx'],
      rules: {
        'lodash/import-scope': 'off',
      },
    },
    {
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/**/*.ts', 'cypress/**/*.tsx'],
      rules: {
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-async-tests': 'error',
        'cypress/no-force': 'warn',
        'cypress/no-pause': 'error',
        'cypress/no-unnecessary-waiting': 'error',
      },
    },
    {
      files: ['*.json'],
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: {
              type: 'asc',
            },
            pathPattern: '^',
          },
        ],
        'jsonc/sort-keys': ['error'],
      },
    },
  ],
};
