module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/*.test.ts', '**/*.test.js', '**/*.test.mjs', '**/*.spec.ts', '**/*.spec.js'],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.test.{js,ts}',
    '!src/**/*.spec.{js,ts}'
  ],
  moduleFileExtensions: ['ts', 'js', 'mjs', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
