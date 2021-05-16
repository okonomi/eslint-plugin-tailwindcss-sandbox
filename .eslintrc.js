module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "tailwindcss"
  ],
  "rules": {
    "tailwindcss/classnames-order": 2,
    "tailwindcss/no-custom-classname": 2,
    "tailwindcss/no-contradicting-classname": 2
  }
};
