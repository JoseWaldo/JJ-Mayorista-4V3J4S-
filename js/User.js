export class User {
    #cc
    #name
    #username
    #password
    #tel

    constructor(cc, name, username, password, tel) {
        this.#username = username
        this.#password = password
        this.#name = name
        this.#cc = cc
        this.#tel = tel
    }

    get getCC() {
        return this.#cc
    }

    get getName() {
        return this.#name
    }

    get getTel() {
        return this.#tel
    }

    get getUsername() {
        return this.#username
    }

    get getPassword() {
        return this.#password
    }
}
