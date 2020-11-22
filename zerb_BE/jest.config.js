module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '**/?(*.)(spec).js?(x)'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  }
};