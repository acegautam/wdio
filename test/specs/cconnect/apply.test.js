import { expect } from 'chai'

/*** CONSTANTS   ***/

// Field Elements
const ELEMs = {
  LOAN_PURPOSE: `#ee4c630d-1dbd-4945-9fee-07e20f008b87`,

  // PURCHASE
  EST_PURC_PRICE: `[name="13b6ca0a-b982-4967-82fb-2f621ef50559"]`,
  EST_PROP_VALUE: `[name="1909ecce-dd32-4026-828d-e11c571e89e0"]`,
  DOWN_PAY_AMT: `[name="3f45552d-41be-428f-8e99-51c68a07fa16"]`,
  DOWN_PAY_PCT: `[name="737cb6c5-6e36-42a3-96b9-b76dd12ee96a"]`,
  DOWN_PAY_PCT: `[name="737cb6c5-6e36-42a3-96b9-b76dd12ee96a"]`,

  // REFI
  EST_VALUE: `[name="110aff01-1f12-4d99-9441-15f2af9808cc"]`,
  CURR_LOAN_AMT: `[name="2445de56-61d7-41e7-862d-d10f11ed6803"]`,
  REQ_LOAN_AMT: `[name="9af064ac-ea53-465d-b6e1-b4af06d72c09"]`

}

describe(':::::::::::::::   LOaN ApPPLY PAgE    ::::::::::::::', () => {
  before(() => {
    browser.hookIframe({
      url: '/?loanapp&siteid=7217930073&workFlowId=543486',
      iframe: 'ConsumerConnectAppIFrame'
    })
    $(`${ELEMs.LOAN_PURPOSE}`).waitForDisplayed()
  })

  it('should display ONLY Purchase fields for Purchase loan', () => {
    // $(`${ELEMs.LOAN_PURPOSE} .Select-input input`).setValue('Purchase a Home')
    // $(`.Select-menu-outer`).click()

    // Leverage custom command - for setting dropdown item
    browser.setDropdownItem({
      ddselector: ELEMs.LOAN_PURPOSE,
      value: 'Purchase a Home'
    })

    // PURCHASE fields should be displayed
    expect($(`${ELEMs.EST_PURC_PRICE}`).isDisplayed()).to.be.true
    expect($(`${ELEMs.EST_PROP_VALUE}`).isDisplayed()).to.be.true
    expect($(`${ELEMs.DOWN_PAY_AMT}`).isDisplayed()).to.be.true
    expect($(`${ELEMs.DOWN_PAY_PCT}`).isDisplayed()).to.be.true

    // REFI fields should be hidden
    expect($(`${ELEMs.EST_VALUE}`).isDisplayed()).to.be.false
    expect($(`${ELEMs.CURR_LOAN_AMT}`).isDisplayed()).to.be.false
    expect($(`${ELEMs.REQ_LOAN_AMT}`).isDisplayed()).to.be.false

  })

  it('should calculate correct downpayment amount given the percentage', () => {
    $(`${ELEMs.EST_PURC_PRICE}`).setValue('500000')
    $(`${ELEMs.EST_PROP_VALUE}`).setValue('400000')
    $(`${ELEMs.DOWN_PAY_PCT}`).setValue('10')
    const downPaymentAmount = $(`${ELEMs.DOWN_PAY_AMT}`).getValue()
    expect(downPaymentAmount, 'Incorrect downpayment amount').to.eq('$50,000')
  })

  // it('should populate Cash Out Refi fields', () => {
  //   $(`#${IDs.LOAN_PURPOSE} .Select-input input`).setValue('Cash-Out Refinance')
  //   $(`.Select-menu-outer`).click()
  // })

  // it('should populate No Cash Out Refi fields', () => {
  //   $(`#${IDs.LOAN_PURPOSE} .Select-input input`).setValue('No Cash-Out Refinance')
  //   $(`.Select-menu-outer`).click()
  // })

  after(() => {
    // browser.pause(5000)
  })
})