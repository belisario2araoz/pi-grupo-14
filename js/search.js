let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("a");

let tituloBusqueda = document.querySelector('.tituloBusqueda')
let sectionBusqueda = document.querySelector('.tarjetasBusqueda')
fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        let productos = data.products
        tituloBusqueda.innerHTML = `Resultados de: ${busqueda}`
        if (productos.length == 0) {
            tituloBusqueda.innerHTML = `No se encontraron resultados de ${busqueda}`
        } else {
            for (let i = 0; i < productos.length; i++) {
                sectionBusqueda.innerHTML += `
            <article class="prod">
                <img src="${productos[i].thumbnail}" alt="${productos[i].title}" />
                <div class="info">
                    <h2>${productos[i].title}</h2>
                    <p>${productos[i].description}</p>
                    
                    <a class="vermas" href="productos.html?id=${productos[i].id}">VER MAS</a>
                </div>
            </article>
                `;
            }
        }
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    }
    );

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