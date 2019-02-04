import { expect } from 'chai'

describe(':::::::::::::::  LOGiN PAGE   ::::::::::::::::', () => {
  before(() => {
    // Leveraging browser-scoped custom command
    browser.hookIframe()

    // browser.url('/?borrowerportal&siteid=7217930073')
    // $('#ConsumerConnectAppIFrame').waitForDisplayed()
    // browser.switchToFrame('ConsumerConnectAppIFrame')
  })

  it('should ensure proper error message is being displayed for invalid credentials', () => {
    // $('#account').waitForDisplayed()
    // $('#account').setValue('acegautam')

    // Leverage element-scoped custom command
    $('#account').waitAndUpdate('acegautam')

    $('.toggle-button').click()
    $(`[name="pf.pass"]`).setValue('Password')
    $('#login-button').click()

    const error = $('#em-cc-account-label').waitAndRead()
    expect($('#em-cc-account-label').isDisplayed(), 'Error message not displayed').to.be.true
    expect(error, 'Incorrect error message').to.equal('Invalid username or password. Please try again.')
    browser.saveScreenshot('./shots/login_error.png')
    browser.pause(2000)
  })
})
