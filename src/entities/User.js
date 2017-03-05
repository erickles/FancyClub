import { observable } from 'mobx'

export class User{
    
    @observable userId    
    @observable userName    
    @observable userSurename    
    @observable photoURL
    @observable userFacebookId
    @observable userEmail
    @observable userPassword
    @observable userGender
    @observable userBirthday

    constructor(userId, userName, userSurename, photoURL, userEmail, userPassword, userGender,userBirthday){
        this.userId = userId
        this.userName = userName
        this.userSurename = userSurename
        this.photoURL = photoURL
        this.userEmail = userEmail
        this.userPassword = userPassword
        this.userGender = userGender
        this.userBirthday = userBirthday
    }

}