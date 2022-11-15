import { User } from './User.js'
import { AdminUser } from './AdminUser.js'

const adminUsers = new AdminUser()

const u1 = new User(1004807096, 'Jose Waldo', 'JWaldo', '123', 3013130377)
const u2 = new User(1111111111, 'Carlos Waldo', 'CWaldo', '123', 3133130313)

adminUsers.addUser(u1)
adminUsers.addUser(u2)

const formLogin = document.querySelector('#form__login')
const messageLoginError = document.querySelector('#messageError')

const validarUsuario = function(e) {
    
    let nameUser = formLogin.login__user.value
    let passwordUser = formLogin.login__password.value

    if(nameUser === '') {
        messageLoginError.textContent = 'Por favor, rellenar el campo Usuario'
        formLogin.login__user.focus()
        e.preventDefault()
    }
    
    else if(passwordUser === '') {
        messageLoginError.textContent = 'Por favor, rellenar el campo Contraseña'
        formLogin.login__password.focus()
        e.preventDefault()
    }
    
    else if(!adminUsers.validateUser(nameUser, passwordUser)) {
        messageLoginError.textContent = 'Usuario y/o contraseña incorrecta'
        formLogin.login__user.focus()
        e.preventDefault()
    }

    else {
        location.href = 'main.html'
        adminUsers.changeUserLogged = nameUser
        localStorage.setItem("userLogged", `${adminUsers.getUserLogged.getName}`)
        alert(`El usuario: ${nameUser} se ha logeado.`)
    }
}

const validar = function(e) {
    validarUsuario(e)
}


formLogin.addEventListener('submit', validar)
