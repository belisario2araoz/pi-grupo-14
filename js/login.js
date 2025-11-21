let formulario = document.querySelector(".buscadorForm");  
let campoBusqueda = document.querySelector('.buscadorInput'); 
let errorBusqueda = document.querySelector('.invalid-feedback-searchInput');  

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let valid = true;
    
    if (campoBusqueda.value === "") {
        errorBusqueda.innerText = 'Por favor complete el campo de búsqueda';
        errorBusqueda.style.display = 'block';
        valid = false;
    }
    else if (campoBusqueda.value.length < 3) {
        errorBusqueda.innerText = 'El término de búsqueda debe tener al menos 3 caracteres';
        errorBusqueda.style.display = 'block';
        valid = false;
    } 
    if (valid) {
        formulario.submit();
}});

function loginUsuario (event){
    event.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'))
    if(!storedUser){
        alert("no hay ningun usuario registrado")
        return
    }
    if (storedUser.email === email && storedUser.password === password){
        localStorage.setItem("loggedUser", JSON.stringify({email}))
        alert("login exitoso")
        window.location.href = 'index.html'

    }else{
        alert('email o contrasenia incorrecta')
    }
this.submit()
}