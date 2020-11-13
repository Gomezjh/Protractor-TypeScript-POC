import {Config} from 'protractor';
var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
  framework: 'jasmine',
  
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ '../_Out/tests/*js' ],

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots',
       takeScreenShotsOnlyForFailedSpecs: false,
       preserveDirectory: false,

    }).getJasmine2Reporter());
 },

 
  noGlobals: false
};
