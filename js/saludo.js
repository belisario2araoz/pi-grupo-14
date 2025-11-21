

let authButtons = document.querySelector('.logres')
let userInfo = document.querySelector('.loggedIn')
let userName = document.querySelector('.saludo')
let logout = document.querySelector('.logout')


const userJSON = localStorage.getItem('loggedUser')

if(userJSON){

    const user = JSON.parse(userJSON)

    authButtons.style.display = 'none'

    userInfo.style.display = 'inline-flex'
    userName.innerHTML = `Hola ${user.email}`
}else{
    authButtons.style.display = 'inline-flex'
    userInfo.style.display = 'none'
}

if(logout){
    logout.addEventListener('click',()=>{
        localStorage.removeItem('loggedUser')
        window.location.href = 'index.html'
    })
}