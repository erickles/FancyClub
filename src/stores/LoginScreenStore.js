import { observable } from 'mobx'

export class LoginScreenStore {

    @observable emailLogging
    @observable signingUp
    @observable emailSigningUp
    @observable logged
    @observable showingLogo = true
    @observable emailInput = ""
    @observable passwordInput = ""
    @observable repeatPasswordInput = ""
    @observable nameInput = ""
    @observable sureNameInput = ""

    setShowLogo(value){
        this.showingLogo = value
    }

    handleEmailInput(value) {
        this.emailInput = value
    }

    handlePasswordInput(value) {
        this.passwordInput = value
    }

    handleNameInput(value) {
        this.nameInput = value
    }

    handleSureNameInput(value) {
        this.sureNameInput = value
    }

    handleRepeatPasswordInput(value) {
        this.repeatPasswordInput = value
    }

    toogleLogged() {
        this.logged = !this.logged
    }

    toogleEmailLogging() {
        this.emailLogging = true
        this.signingUp = false
        this.emailSigningUp = false
    }

    toogleSigningUp() {
        this.emailLogging = false
        this.signingUp = true
        this.emailSigningUp = false
    }

    toogleEmailSigningUp() {
        this.emailLogging = false
        this.signingUp = false
        this.emailSigningUp = true
    }

    resetScreen() {
        this.emailLogging = false
        this.signingUp = false
        this.emailSigningUp = false
    }

}

export default new LoginScreenStore