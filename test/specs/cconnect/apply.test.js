import { expect } from 'chai'
import LoanApp from '../../pages/loanapp';
import BorrowerApp from '../../pages/borrowerapp';
import Login from '../../pages/login'

describe(':::::::::::::::   LOaN ApPPLY PAgE    ::::::::::::::', () => {
  before(() => {
    LoanApp.open();
  })

  it('should display ONLY Purchase fields for Purchase loan', () => {
    // expect(LoanApp.loanPurpose.isDisplayed()).to.be.true

    // Leverage custom command - for setting dropdown item
    browser.setDropdownItem({
      ddselector: LoanApp.loanPurposeSelector,
      value: 'Purchase a Home'
    })

    // PURCHASE fields should be displayed
    expect(LoanApp.estPurcPrice.isDisplayed()).to.be.true
    expect(LoanApp.estPropValue.isDisplayed()).to.be.true
    expect(LoanApp.downPayAmt.isDisplayed()).to.be.true
    expect(LoanApp.downPayPct.isDisplayed()).to.be.true

    // REFI fields should be hidden
    expect(LoanApp.estValue.isDisplayed()).to.be.false
    expect(LoanApp.currLoanAmt.isDisplayed()).to.be.false
    expect(LoanApp.reqLoanAmt.isDisplayed()).to.be.false

  })

  it('should calculate correct downpayment amount given the percentage', () => {
    LoanApp.estPurcPrice.setValue('900000')
    LoanApp.estPropValue.setValue('800000')
    LoanApp.downPayPct.setValue('10')
    const downPaymentAmount = LoanApp.downPayAmt.getValue()
    expect(downPaymentAmount, 'Incorrect downpayment amount').to.eq('$90,000')
    browser.pause(2000)
  })

  it('should navigate to the next page and render the next page correctly', () => {
    LoanApp.goToBorrDetails()
    expect(LoanApp.firstName.isDisplayed()).to.be.true
    expect(LoanApp.lastName.isDisplayed()).to.be.true
    expect(LoanApp.email.isDisplayed()).to.be.true
  })

  it('should save the basic borrower info (ANONYMOUS) into the system succesfully', () => {
    // Populate borrower info
    LoanApp.firstName.setValue('Bruce')
    LoanApp.lastName.setValue('Wayne')
    LoanApp.email.setValue('batman@gothamcity.com')

    // Hit Save (anon: redirects to login)
    LoanApp.saveBtn.click()

    // Login using valid creds. Gets redirect to borrower portal.
    Login.signin('acegautam1', 'Password1!')

    // Hit Resume on the first card.
    BorrowerApp.resumeApp()
    
    // Resumes loan application. Check for the correct page to be loaded.
    LoanApp.firstName.waitForDisplayed()
    expect(LoanApp.firstName.isDisplayed()).to.be.true

    // Check save success notification pops up
    expect(LoanApp.isSaveSuccessful()).to.be.true
  })
  
  // it('should save the basic borrower info (LOGGED IN) into the system succesfully', () => {
  //   LoanApp.firstName.setValue('Bruce')
  //   LoanApp.lastName.setValue('Wayne')
  //   LoanApp.email.setValue('batman@gothamcity.com')
  // })

  after(() => {
    browser.pause(2000)
  })
})