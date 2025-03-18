import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt(
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
        flat: true,
    }),
    {
        files: ['**/*.vue', '**/*.ts'],
        rules: {
            'no-console': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            'object-curly-newline': ['error', {
                multiline: true,
                consistent: true,
            }],
            'object-property-newline': ['error', { allowMultiplePropertiesPerLine: false }],
            'array-bracket-newline': ['error', { multiline: true }],
            'function-paren-newline': ['error', 'multiline'],
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            'vue/no-multiple-template-root': 'off',
            'vue/require-v-for-key': 'error',
            'vue/no-use-v-if-with-v-for': 'error',
            'vue/html-indent': ['error', 4],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 1,
                    },
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/singleline-html-element-content-newline': ['error', {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ['pre', 'textarea'],
                externalIgnores: [],
            }],
            'vue/multiline-html-element-content-newline': ['error', {
                ignoreWhenEmpty: true,
                allowEmptyLines: false,
            }],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'always',
                    selfClosingTag: {
                        singleline: 'never',
                        multiline: 'always',
                    },
                },
            ],
            'vue/multi-word-component-names': 'off',
        },
    },
)
