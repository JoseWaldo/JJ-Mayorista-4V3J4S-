export class AdminUser {
    #users
    #userLogged

    constructor() {
        this.#users = []
        this.#userLogged = null
    }

    searchUser(username) {
        for(let user of this.#users) {
            if(user.getUsername === username) {
                return user
            }
        }
        return null
    }

    existUser(username) {
        if(this.searchUser(username) !== null) {
            return true
        }
        return false
    }

    addUser(user) {
        if(user !== null) {
            this.#users.push(user)
        }
    }

    validateUser(username, password) {
        let userFound = this.searchUser(username)
        if(userFound !== null) {
            if(userFound.getPassword === password) {
                return true
            }
        }
        return false
    }

    get getUserLogged() {
        return this.#userLogged
    }

    get getUsers() {
        return this.#users
    }

    set changeUserLogged(username) {
        let userFound = this.searchUser(username)
        this.#userLogged = userFound
        console.log(this.#userLogged)
    }

}