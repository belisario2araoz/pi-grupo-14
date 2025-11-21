queryS = location.search;
let urlParams = new URLSearchParams(queryS);
let category = urlParams.get('category');

let errorVacio = document.querySelector('.errorVacio')

console.log(category);
fetch(`https://dummyjson.com/products/category/${category}?limit=194`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        productos = data.products
        console.log(productos);
        let tituloCat = document.querySelector(".trajebanio")
        tituloCat.innerHTML = `<h2>${category.toUpperCase().replaceAll("-", " ")}</h2>`;

        let cat = document.querySelector("section.categoriatrajedebano")

        for (i = 0; i < productos.length; i++) {

            cat.innerHTML += `
            <article class="productoscategoria">
                <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                <div class="infotraje">
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <p>$${productos[i].price}</p>
                    <a href="productos.html?id=${productos[i].id}" class="vermas">Ver más</a>
                </div>
            </article>`

        }
    });

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