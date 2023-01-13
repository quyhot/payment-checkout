module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        'node': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'vue/multi-word-component-names': ['error', {
            'ignores': ['default']
        }],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};
