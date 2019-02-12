import { expect } from 'chai'
import Login from '../../pages/login'

describe(':::::::::::::::  LOGiN PAGE   ::::::::::::::::', () => {
  before(() => {
    // Leveraging page objects
    Login.open()
    
    // Leveraging browser-scoped custom command
    // browser.hookIframe()

    // browser.url('/?borrowerportal&siteid=7217930073')
    // $('#ConsumerConnectAppIFrame').waitForDisplayed()
    // browser.switchToFrame('ConsumerConnectAppIFrame')
  })

  it('should not login & ensure proper error message is being displayed for invalid credentials', () => {
    // $('#account').waitForDisplayed()
    // $('#account').setValue('acegautam')

    // Leverage element-scoped custom command with Page Objects
    Login.username.waitAndUpdate('fakeuser')
    Login.togglebtn.click()
    Login.password.setValue('badpassword')
    Login.submit.click()

    const error = Login.msgLabel.waitAndRead()
    expect(Login.msgLabel.isDisplayed(), 'Error message not displayed').to.be.true
    expect(error, 'Incorrect error message').to.equal(Login.errorMessages.INVALID_LOGIN)
    browser.saveScreenshot('./shots/login_error.png')
    browser.pause(2000)
  })

  it('should login and redirect to BP using valid credentials', () => {
    // Leveraging page objects method
    Login.signin('acegautam', 'Password1!')
    Login.homeGreeting.waitForDisplayed()
    expect(Login.homeGreeting.isDisplayed(), 'Not redirected to correct home page post valid login').to.be.true
    browser.pause(2000)    
  })
})
