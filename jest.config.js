module.exports = {
  preset: 'react-native',
  bail: 1,
  automock: false,
  cacheDirectory: './jest/cache',
  clearMocks: true,
  collectCoverage: true,
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native|@react-navigation)'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/android/**',
    '!**/ios/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/jest/**',
  ],
  coverageDirectory: './jest/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/vendor/',
    '/android/',
    '/ios/',
    '/jest/',
    '/saga/',
    '/SvgImage',
    '/src/types/',
    '/navigation/index.tsx',
    '/src/hooks/',
  ],
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    [
      'text',
      {
        skipFull: true,
      },
    ],
  ],
  displayName: {
    name: 'CoinChums',
    color: 'green',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      isolatedModules: true,
    },
  },
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/ImageMock.js',
    '\\.(svg)$': '<rootDir>/__mocks__/SvgMock.js',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
