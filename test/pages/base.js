class BasePage {
    open(path, hasIframe = true) {
        browser.url(path)
        if (hasIframe) {
            $('#ConsumerConnectAppIFrame').waitForDisplayed()
            browser.switchToFrame('ConsumerConnectAppIFrame')
        }
    }
}

export default BasePage
