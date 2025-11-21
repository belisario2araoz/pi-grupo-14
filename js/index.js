fetch('https://dummyjson.com/products?limit=194')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        productos = data.products
        console.log(productos);
        let masVendidos = document.querySelector("section.Productos_mas_vendidos")
        masVendidos.innerHTML = ` <h2>
                    PRODUCTOS MAS VENDIDOS
                </h2>`
        let random = document.querySelector("section.Productos")
        random.innerHTML = `<h2>
                    PRODUCTOS ALEATORIOS
                </h2>`
        for (i = 0; i < productos.length; i++) {
            if (productos[i].category == "fragrances") {
                random.innerHTML += `
            <article class="prod">
                <img src="${productos[i].thumbnail}" alt="${productos[i].title}" />
                <div class="info">
                    <h2>${productos[i].title}</h2>
                    <p>${productos[i].description}</p>
                    
                    <a class="vermas" href="productos.html?id=${productos[i].id}">VER MAS</a>
                </div>
            </article>
`
            }
            else if (productos[i].category == "sunglasses") {
                masVendidos.innerHTML += `
            <article class="prod">
                <img src="${productos[i].thumbnail}" alt="${productos[i].title}" />
                <div class="info">
                    <h2>${productos[i].title}</h2>
                    <p>${productos[i].description}</p>
                    
                    <a class="vermas" href="productos.html?id=${productos[i].id}">VER MAS</a>
                </div>
            </article>
`
            }

            else {

            }
        }
    });


let divCategoria = document.querySelector(".menu")


fetch("https://dummyjson.com/products/categories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            divCategoria.innerHTML += `<li><a href="categorias.html?category=${data[i].slug}">${data[i].name}</a></li>`
        }
    })



let formulario = document.querySelector(".buscadorForm");
let campoBusqueda = document.querySelector('.buscadorInput');
let errorBusqueda = document.querySelector('.invalid-feedback-searchInput');

formulario.addEventListener('submit', function (event) {
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
    }
});

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