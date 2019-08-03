module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  globals: {
    window: {
      navigator: {
        userAgent: 'test'
      }
    }
  }
}
