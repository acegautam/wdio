import BasePage from './base'

class LoanApp extends BasePage {
    open (path = '/?loanapp&siteid=7217930073&workFlowId=543486') {
        super.open(path)
        this.loanPurpose.waitForDisplayed()
    }

    goNext () {
        this.nextBtn.click()
    }

    goToBorrDetails() {
        this.goNext()
        // browser.pause(1000)
        this.goNext()
        // browser.pause(1000)
        this.goNext()
    }

    isSaveSuccessful() {
        this.toastr.waitForDisplayed()
        return this.toastr.isDisplayed()
    }

    // BUTTONS
    get nextBtn() { return $('.next') }
    get backBtn() { return $('.prev') }
    get saveBtn() { return $('button=Save') }

    // TOASTR
    get toastr() { return $('.rrt-success') }

    // LOAN PURPOSE
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

    // BORR INFO
    get firstName() { return $(`[name="949210d0-879d-41b3-b513-ffb1cd42e539"]`) }
    get lastName() { return $(`[name="0c921ad9-caaf-46b3-9fba-ebbd8dbf22c3"]`) }
    get email() { return $(`[name="53d3755b-ba8d-44bc-a9bd-36b21dc5c000"]`) }
    
}

export default new LoanApp()