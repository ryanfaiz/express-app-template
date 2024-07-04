module.exports = {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: ['**/src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
