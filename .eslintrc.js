module.exports = {
  root: true,
  env: {
    node: true,
    //'vue/setup-compiler-macros': true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    //'plugin:vue/vue3-essential',
    //'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: 'tsconfig.json'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 6,
        multiline: 6
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}


/*
I will check both config for later. render buggy!
const base = require('eslint-config-standard-ts')

/** @type {import('eslint').Linter.Config} 
module.exports = {
  root: true,
  env: {
    node: true,
    //'vue/setup-compiler-macros': true
  },
  extends: ['standard', 'plugin:vue/vue3-recommended'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: 'tsconfig.json'
  },
  rules: {
    ...base.overrides[0].rules,
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 6,
        multiline: 6
      }
    ]
  }
}

*/