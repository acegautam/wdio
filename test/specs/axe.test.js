// load the axe-core script
import { expect } from 'chai'
import LoanApp from '../pages/loanapp'

const axeSource = require('axe-core').source;

describe('::::::::::  AxE TESt  ::::::::::', function () {
  it('should report no a11y violations', function () {
    // browser.url('/?loanapp&siteid=7217930073&workFlowId=543486');
    // $('#ConsumerConnectAppIFrame').waitForDisplayed()
    LoanApp.open();

    // inject the script
    browser.execute(axeSource);

    // run inside browser and get results
    let results = browser.executeAsync(function (done) {
      const axeOpts = {
        runOnly: ['wcag2a', 'wcag2aa']
      }
      // run axe on our site
      axe.run(document, axeOpts, function (err, results) {
        if (err) done(err)
        done(results);
      });
    });

    console.log(results.violations)
    console.log('===============  NODE  =================');
    console.log(results.violations[0].nodes[0])
    console.log('====================================');
    const violationsCount = results.violations.length
    expect(violationsCount === 0, `Found ${violationsCount} a11y violation(s), please fix :`).to.be.true
  })
})