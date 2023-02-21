document.addEventListener("DOMContentLoaded", function () {
    console.log("el dom se completo");
})

//boton de nav

const cartToggle = document.querySelector(".car__toggle");
const cartBlock = document.querySelector(".car__block");
const baseURL= "https://academlo-api-production.up.railway.app/api"

cartToggle.addEventListener("click", () => {
    cartBlock.classList.toggle("nav__car__visible")
})

function getProductos() {
    axios.get(`${baseURL}/products`)
    .then((response) => {
        const products = response.data
        console.log(products);
    })
    .catch((err) => {
        console.log(err);
    })
}

getProductos()