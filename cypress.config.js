const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require("dotenv").config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    screenshotOnRunFailure :false,
    chromeWebSecurity: false,
    videoCompression:false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://way2automation.com/way2auto_jquery/",
    specPattern: "cypress/e2e/feature/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});
