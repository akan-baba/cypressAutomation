const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl:'http://192.168.1.201:8008/'
  },
});
