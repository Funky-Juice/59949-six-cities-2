module.exports = {
  verbose: true,
  setupFiles: [`./jest.setup.js`],
  transform: {
    '^.+\\.tsx?$': `ts-jest`,
    '^.+\\.js?$': `babel-jest`,
  },
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
};
