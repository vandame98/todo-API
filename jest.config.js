/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js'],
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  verbose: true,
};
