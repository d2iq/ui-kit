module.exports = {
  restoreMocks: true,
  rootDir: ".",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "scripts"],
  coverageReporters: ["json", "text"],
  projects: [
    {
      displayName: "Jest",
      roots: ["packages"],
      moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
      setupTestFrameworkScriptFile: "<rootDir>/testHelper/setupTests.ts",
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
      }
    },
    {
      displayName: "Prettier",
      runner: "jest-runner-prettier",
      moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
      testPathIgnorePatterns: ["design-tokens"],
      testMatch: [
        "<rootDir>/packages/**/*.{ts|tsx}",
        "tslint.json",
        "tsconfig.json",
        "tsconfig.dist.json"
      ]
    }
  ],
  snapshotSerializers: [
    "@emotion/jest/serializer" /* if needed other snapshotSerializers should go here */
  ]
};
