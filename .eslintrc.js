const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    'no-debugger': isProduction ? 2 : 0,
    'no-alert': isProduction ? 2 : 0,
    'semi': [2, 'never'],
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'quotes': [2, 'single'],
    'quote-props': [2, 'consistent-as-needed'],
    'eol-last': [2, 'always'],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'space-before-function-paren': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'vue/script-indent': [2, 2, { baseIndent: 1 }],
    'vue/script-setup-uses-vars': 2,
    'vue/custom-event-name-casing': 0,
    'vue/attributes-order': 0,
    'vue/one-component-per-file': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-default-prop': 0,
    'vue/require-explicit-emits': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  globals: {
    $ref: 'readonly',
    $computed: 'readonly'
  }
}
