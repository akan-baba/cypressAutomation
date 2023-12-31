
// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@shelex/cypress-allure-plugin');
require('browserstack-cypress-cli/bin/testObservability/cypress');
require('cypress-xpath');

// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}
