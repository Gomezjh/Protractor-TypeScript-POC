import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  //seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ '../_Out/tests/*js' ],
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
