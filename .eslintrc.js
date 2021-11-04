module.exports = {
    root: true,
    env: {
        "browser": true,
        "node": true
    },
    extends: [
      // add more generic rulesets here, such as:
      'eslint:recommended',
      'plugin:vue/vue3-strongly-recommended',
      '@vue/typescript/recommended',
      // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    parserOptions: {
        ecmaVersion: 2021
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
  }