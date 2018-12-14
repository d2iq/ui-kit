module.exports = {
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
        "^.+\\.tsx?$": "ts-jest"
      }
    },
    {
      displayName: "Prettier",
      runner: "jest-runner-prettier",
      moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
      testMatch: [
        "<rootDir>/packages/**/*!(.d).{ts|tsx}",
        "tslint.json",
        "tsconfig.json",
        "tsconfig.dist.json"
      ]
    }
  ]
};
