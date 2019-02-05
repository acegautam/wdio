import BasePage from './base'
class Login extends BasePage {
    open(path = '/?borrowerportal&siteid=7217930073') {
        super.open(path)
    }

    signin(username, password) {
        this.username.waitAndUpdate(username)
        this.togglebtn.click()
        this.password.setValue(password)
        this.submit.click();
    }

    get username() { return $('#account') }
    get password() { return $(`[name="pf.pass"]`)}
    get togglebtn() { return $('.toggle-button') }
    get submit() { return $('#login-button') }
    get msgLabel() { return $('#em-cc-account-label') }
    get homeGreeting () { return $('.em-cc-bp-home-greeting') }

    get errorMessages () {
        return {
            INVALID_LOGIN: 'Invalid username or password. Please try again.'
        }
    }
}

export default new Login()
