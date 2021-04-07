module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/libs/"
  ],
  reporters: ['default', ['./node_modules/jest-html-reporter', {
    pageTitle: 'Test Report',
    includeFailureMsg: true,
    outputPath: './reports/jest-html-reporter.html'
  }]],
  testResultsProcessor: "jest-junit",
  coverageDirectory: "./reports/coverage",
  coverageReporters: [
    "json", "lcov", "text", "clover", "cobertura"
  ]
};
