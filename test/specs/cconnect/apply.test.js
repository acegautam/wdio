import { expect } from 'chai'
import LoanApp from '../../pages/loanapp';

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
  })

  // it('should populate Cash Out Refi fields', () => {
  //   browser.setDropdownItem({
  //     ddselector: LoanApp.loanPurposeSelector,
  //     value: 'Cash-Out Refinance'
  //   })
  // })

  // it('should populate No Cash Out Refi fields', () => {
  //   browser.setDropdownItem({
  //     ddselector: LoanApp.loanPurposeSelector,
  //     value: 'Cash-Out Refinance'
  //   })
  // })

  after(() => {
    browser.pause(2000)
  })
})