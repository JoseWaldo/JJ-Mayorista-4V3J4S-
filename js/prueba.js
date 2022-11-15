const nameUser = document.querySelector('.info-user__name-user')
const dateUser = document.querySelector('.info-user__date')
const timeUser = document.querySelector('.info-user__time')

const date = new Date()

let userLog = localStorage.userLogged

nameUser.textContent = userLog
dateUser.textContent = date.toDateString()
timeUser.textContent = date.toLocaleTimeString()


