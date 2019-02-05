import BasePage from './base'

class LoanApp extends BasePage {
    open (path = '/?loanapp&siteid=7217930073&workFlowId=543486') {
        super.open(path)
        this.loanPurpose.waitForDisplayed()
    }

    get loanPurposeSelector() { return `#ee4c630d-1dbd-4945-9fee-07e20f008b87` }
    get loanPurpose() { return $(`#ee4c630d-1dbd-4945-9fee-07e20f008b87`) }

    // PURCHASE    
    get estPurcPrice() { return $(`[name="13b6ca0a-b982-4967-82fb-2f621ef50559"]`) }
    get estPropValue() { return $(`[name="1909ecce-dd32-4026-828d-e11c571e89e0"]`) }
    get downPayAmt() { return $(`[name="3f45552d-41be-428f-8e99-51c68a07fa16"]`) }
    get downPayPct() { return $(`[name="737cb6c5-6e36-42a3-96b9-b76dd12ee96a"]`) }

    // REFI
    get estValue() { return $(`[name="110aff01-1f12-4d99-9441-15f2af9808cc"]`) }
    get currLoanAmt() { return $(`[name="2445de56-61d7-41e7-862d-d10f11ed6803"]`) }
    get reqLoanAmt() { return $(`[name="9af064ac-ea53-465d-b6e1-b4af06d72c09"]`) }

    // get loanPurpose() { return $() }
    // get loanPurpose() { return $() }
    // get loanPurpose() { return $() }
    // get loanPurpose() { return $() }
    // get loanPurpose() { return $() }
    // get loanPurpose() { return $() }
    // get loanPurpose() { return $() }
    
}

export default new LoanApp()