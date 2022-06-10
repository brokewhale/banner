module.exports = {
  webpack: function(config, env) {
    return config;
  },
  jest: function(config) {
    config = {
      ...config,
      preset: 'jest-puppeteer',
      roots: ['<rootDir>/tests'],
      setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
      testMatch: [
        '<rootDir>/tests/**/*.{spec,test}.{js,jsx,ts,tsx}'
      ]
    }
    return config;
  },
}