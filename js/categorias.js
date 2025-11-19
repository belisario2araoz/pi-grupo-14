queryS = location.search;
let urlParams = new URLSearchParams(queryS);
let category = urlParams.get('category');
console.log(category);
fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);
productos=data.products
console.log(productos);
let tituloCat = document.querySelector("div.trajedebaño")
tituloCat.innerHTML = `<h2>${category.toUpperCase()}</h2>`;
let cat = document.querySelector("section.categoriatrajedebano")
cat.innerHTML = "";
for (i = 0; i < productos.length; i++) {
    queryS = location.search;
let urlParams = new URLSearchParams(queryS);
let category = urlParams.get('category');
if(productos[i].category == category){
cat.innerHTML += `
            <article class="productoscategoria">
                <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                <div class="infotraje">
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <p>$${productos[i].price}</p>
                    <a href="productos.html?id=${productos[i].id} class="vermas">Ver más</a>
                </div>
            </article>
`
}else{


}}})

