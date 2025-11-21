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

function registroUsuario(e) {
    e.preventDefault();



    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const repeatPassword = document.querySelector('#repeatPassword').value
    const terms = document.querySelector('#acep').checked

        console.log(email)

    if(password !== repeatPassword){
        alert('las contrasenias no son iguales')
        return
    }
    if(!terms){
        alert('Debes aceptar los terminos y condiciones')
        return
    }

    const nuevoUser = {email, password}
    localStorage.setItem("registeredUser", JSON.stringify(nuevoUser))

    localStorage.setItem('loggedUSer', JSON.stringify({email}))

    window.location.href = 'index.html'

}