module.exports = {
  preset: "react-native",
  bail: 1,
  automock: false,
  cacheDirectory: "./jest/cache",
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@react-native|react-nativ|@react-navigation)"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/android/**",
    "!**/ios/**",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/jest/**",
  ],
  coverageDirectory: "./jest/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/vendor/", "/android/", "/ios/", "/jest/"],
  displayName: {
    name: "CoinChums",
    color: "green",
  },
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
      isolatedModules: true,
    },
  },
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.setup.js"],
};
