module.exports = {
  collectCoverage: true,
  coverageDirectory: "jest-coverage",
  coverageThreshold: {
    global: {
      statements: 95,
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["<rootDir>/tests/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  testTimeout: 60000,
};
