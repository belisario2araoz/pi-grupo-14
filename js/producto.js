fetch('https://dummyjson.com/products?limit=194')
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);
productos=data.products
console.log(productos);
let masVendidos = document.querySelector("section.Productos_mas_vendidos")
})