fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);
productos=data.products
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
if(productos[i].category == "fragrances"){
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
else if(productos[i].category == "sunglasses"){
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

else{

}}});
