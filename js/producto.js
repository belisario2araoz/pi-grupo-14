let queryString = location.search;
let productoId = queryString.split("=")[1];

let seccion = document.querySelector(".detalleproducto");

fetch(`https://dummyjson.com/products/${productoId}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        seccion.innerHTML = `
            <div class="producto-flex">
                <div class="columna-izq">
                    <img src="${data.thumbnail}" alt="${data.title}">
                </div>
                <div class="columna-der">
                    <h2 class="tituloPro">${data.title}</h2>
                    <h3 class="marcaPro">${data.brand}</h3>
                    <p class="precioPro">$${data.price}</p>
                    <p class="descPro">${data.description}</p>
                    <p class="stockPro">Stock: ${data.stock}</p>
                    <a href="./categorias.html?category=${data.category}" class="boton-cat">
                        Ver categoría: ${data.category.replaceAll("-", " ")}
                    </a>
                </div>
            </div>
            
            <div class="seccion-comentarios">
                <h3>Opiniones de usuarios</h3>
                <div class="lista-comentarios"></div>
            </div>
        `;

        let contenedorComentarios = document.querySelector('.lista-comentarios');
        
        for (let i = 0; i < data.reviews.length; i++) {
            contenedorComentarios.innerHTML += `
                <article class="comment-card">
                    <p class="rating"> ${data.reviews[i].rating}</p>
                    <p class="comment">"${data.reviews[i].comment}"</p>
                    <p class="user">- ${data.reviews[i].reviewerName}</p>
                </article>
            `;
        }
    })
    .catch(function(error){
        console.log("Error: " + error);
    });

let formulario = document.querySelector(".buscadorForm");
let campoBusqueda = document.querySelector('.buscadorInput');
let errorBusqueda = document.querySelector('.invalid-feedback-searchInput');

if(formulario){
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
}