const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    actualizarCarrito();
  }
});

botonVaciar.addEventListener('click', () => {
  Swal.fire({
    title: '¿Estás seguro que quieres borrar el carrito?',
    text: 'Se borrarán todos los productos.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'black',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, borrar!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Eliminados!', 'Sus productos han sido eliminados.', 'success');
    }
  });

  carrito.length = 0;
  actualizarCarrito();
});

fetch('./data.json')
  .then((res) => res.json())
  .then((productos) => {
    productos.forEach((producto) => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
      <img class="imagen-producto" src=${producto.img} alt="">
      <h3>${producto.nombre}</h3>
      <p>${producto.categoria}</p>
      <p class="precio-producto">Precio:$ ${producto.precio}</p>
      <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
      `;
      contenedorProductos.appendChild(div);

      const boton = document.getElementById(`agregar${producto.id}`);
      boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id, productos);
      });
    });
  });


const agregarAlCarrito = (prodId,productos) => {
    Toastify({
        text: "Producto agregado",
        duration: 500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, black, grey)",
        },
        offset: {
            x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    Toastify({
        text: "Producto eliminado",
        duration: 500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, black, grey)",
        },
        offset: {
            x: 690, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 500 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();



    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {

    
    
    contenedorCarrito.innerHTML = "" 
   
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('producto-carrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    
}

