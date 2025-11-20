let queryString = location.search;
console.log(queryString);
let urlParams = new URLSearchParams(queryString);
let productoId = urlParams.get("id");
console.log(productoId);
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
            <section class="comment">
                <p class="rating">${data.reviews[0].rating}</p>
                <p class="user">${data.reviews[0].reviewerName}</p>
                <p class="comment">${data.reviews[0].comment}</p>
                <p class="date">${data.reviews[0].date}</p>
            </section>
                        <section class="comment">
                <p class="rating">${data.reviews[1].rating}</p>
                <p class="user">${data.reviews[1].reviewerName}</p>
                <p class="comment">${data.reviews[1].comment}</p>
                <p class="date">${data.reviews[1].date}</p>
            </section>
                        <section class="comment">
                <p class="rating">${data.reviews[2].rating}</p>
                <p class="user">${data.reviews[2].reviewerName}</p>
                <p class="comment">${data.reviews[2].comment}</p>
                <p class="date">${data.reviews[2].date}</p>
            </section>
            <section class="sectionCom">
                
            </section>`


    })