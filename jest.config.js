export default {
  restoreMocks: true,
  rootDir: ".",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "scripts"],
  coverageReporters: ["json", "text"],
  projects: [
    {
      displayName: "Jest",
      roots: ["packages"],
      moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
      testEnvironment: "jsdom",
      setupFilesAfterEnv: ["<rootDir>/testHelper/setupTests.ts"],
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
      },
      // Below is required for Jest + Webpack handling static assets: https://jestjs.io/docs/webpack
      moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js"
      }
    },
    {
      displayName: "Prettier",
      runner: "jest-runner-prettier",
      moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
      testPathIgnorePatterns: ["design-tokens"],
      testMatch: [
        "<rootDir>/packages/**/*.{ts|tsx}",
        "eslint.json",
        "tsconfig.json",
        "tsconfig.lint.json",
        "tsconfig.dist.json"
      ]
    }
  ],
  snapshotSerializers: [
    "@emotion/jest/serializer" /* if needed other snapshotSerializers should go here */
  ]
};
