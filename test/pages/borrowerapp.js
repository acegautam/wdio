import BasePage from './base'

class BorrowerApp extends BasePage {
  resumeApp (appId = '') {
    this.resumeBtn.waitForDisplayed()
    this.resumeBtn.click()
  }

  get resumeBtn() { return $('button=resume') }
}

export default new BorrowerApp()
