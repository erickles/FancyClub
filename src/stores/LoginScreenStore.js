import { observable } from 'mobx'

export class LoginScreenStore {

    @observable emailLogging
    @observable signingUp
    @observable emailSigningUp
    @observable logged
    @observable emailInput
    @observable passwordInput

    handleEmailInput(value){
        this.emailInput = value
    }

    handlePasswordInput(value){
        this.passwordInput = value
    }

    toogleLogged(){
        this.logged = !this.logged        
    }

    toogleEmailLogging(){
        this.emailLogging = true
        this.signingUp = false
        this.emailSigningUp = false
    }

    toogleSigningUp(){
        this.emailLogging = false
        this.signingUp = true
        this.emailSigningUp = false
    }

    toogleEmailSigningUp(){
        this.emailLogging = false
        this.signingUp = false
        this.emailSigningUp = true
    }

    resetScreen(){
        this.emailLogging = false
        this.signingUp = false
        this.emailSigningUp = false
    }

}

export default new LoginScreenStore