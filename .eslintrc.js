module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    React: true,
    JSX: true,
    Faker: true,
    NodeJS: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-react",

    "jest",
    "jsx-a11y",
    "prettier"
  ],
  ignorePatterns: ["**/*.d.*"],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple"
      }
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": ["off"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always"
      }
    ],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/unbound-method": "off",
    "arrow-parens": ["off", "always"],
    complexity: [
      "error",
      {
        max: 20
      }
    ],
    "constructor-super": "error",
    curly: "error",
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/tabindex-no-positive": "warn",
    "max-classes-per-file": ["error", 1],
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-new-wrappers": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "padded-blocks": [
      "off",
      {
        blocks: "never"
      },
      {
        allowSingleLineBlocks: true
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all"
      }
    ],
    "prefer-object-spread": "error",
    "quote-props": "off",
    quotes: "off",
    radix: "error",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-key": "error",

    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-tag-spacing": [
      "off",
      {
        afterOpening: "allow",
        closingSlash: "allow"
      }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "off",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "prettier/prettier": "error"
  }
};
