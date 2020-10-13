module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ["src/**/*.{ts,js}"],
  testPathIgnorePatterns: [
    "/node_modules/"
  ]
};