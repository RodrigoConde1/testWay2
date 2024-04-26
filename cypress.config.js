const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require("dotenv").config();
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: './dist/cypress/report',
    charts: true,
    reportPageTitle: 'custom-title',
    reportFilename: '[name].html',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,  
  },
  e2e: {
    supportFile: './rodri-e2e/test-file/e2e/support/e2e.js',
    screenshotOnRunFailure :false,
    chromeWebSecurity: false,
    videoCompression:false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://way2automation.com/way2auto_jquery/",
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      return config
    },
  }
});
