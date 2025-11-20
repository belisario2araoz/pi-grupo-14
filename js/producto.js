let queryString = location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
let productoId = urlParams.get("id");
console.log(productoId);

let comentarios = document.querySelector('.comentarios')

fetch(`https://dummyjson.com/products/${productoId}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let seccion = document.querySelector(".detalleproducto")
        seccion.innerHTML =
            `<h2 class="tituloPro">${data.title}</h2>
            <h3 class="marcaPro">${data.brand}</h3>
            <img src=${data.thumbnail}>
            <p class="descPro">${data.description}</p>
            <p class="precioPro">${data.price}</p>
            <p class="stockPro">${data.stock}</p>
                    <a href="./categorias.html?category=${data.category}">
                                <p class="catPro"> ${data.category.replaceAll("-", " ")}</p>
                    </a>`

        for (let i = 0; i < data.reviews.length; i++) {

            comentarios.innerHTML +=
                `<section class="comment">
                <p class="rating">${data.reviews[i].rating}</p>
                <p class="user">${data.reviews[i].reviewerName}</p>
                <p class="comment">${data.reviews[i].comment}</p>
                <p class="date">${data.reviews[i].date}</p>
            </section>`
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