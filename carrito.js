const contenedorModal = document.getElementsByClassName('carrito-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('carrito-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('carrito-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('carrito-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})