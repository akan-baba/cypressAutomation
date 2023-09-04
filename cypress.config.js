const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'tiuogo',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    },
    baseUrl: 'http://192.168.1.201:8008/',
    projectId: 'tiuogo',
    
  },
});
