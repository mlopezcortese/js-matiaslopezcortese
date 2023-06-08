const productos = [
    //juegos
    {id:1,nombre:"Elden Ring", imagen:"./img/juegos/Ering.jpg" ,categoria:{nombre:"juegos",id:"juegos"}, precio:1000},
    {id:2,nombre:"Dark Souls", imagen:"./img/juegos/Ds1.jpg ",categoria:{nombre:"juegos",id:"juegos"}, precio:2000},
    {id:3,nombre:"Dark Souls2", imagen:"./img/juegos/Ds2.jpg",categoria:{nombre:"juegos",id:"juegos"}, precio:3000},
    {id:4,nombre:"Dark Souls3", imagen:"./img/juegos/Ds3.jpg ",categoria:{nombre:"juegos",id:"juegos"}, precio:4000},
    {id:5,nombre:"Gta", imagen:"./img/juegos/GtaV.png ",categoria:{nombre:"juegos",id:"juegos"}, precio:5000},
    //mouses
    {id:6,nombre:"Mouse Corsair 1", imagen:"./img/mouses/mouse1.jpg",categoria:{nombre:"mouse",id:"mouse"},precio:2000},        
    {id:7,nombre:"Mouse Corsair 2", imagen:"./img/mouses/mouse2.jpg",categoria:{nombre:"mouse",id:"mouse"},precio:3000},    
    {id:8,nombre:"Mouse Corsair 3", imagen:"./img/mouses/mouse3.jpg",categoria:{nombre:"mouse",id:"mouse"},precio:4000},    
    {id:9,nombre:"Mouse Corsair 4", imagen:"./img/mouses/mouse4.jpg",categoria:{nombre:"mouse",id:"mouse"},precio:5000},    
    {id:10,nombre:"Mouse Corsair 5", imagen:"./img/mouses/mouse5.jpg",categoria:{nombre:"mouse",id:"mouse"},precio:6000},    
    //teclados
    {id:11,nombre:"Teclado Corsair k60", imagen:"./img/teclado/k60.jpg ",categoria:{nombre:"teclado",id:"teclado"},precio:5000},
    {id:12,nombre:"Teclado Corsair K65", imagen:"./img/teclado/k65.jpg ",categoria:{nombre:"teclado",id:"teclado"},precio:6000},
    {id:13,nombre:"Teclado Corsair K70", imagen:"./img/teclado/k70.jpg ",categoria:{nombre:"teclado",id:"teclado"},precio:7000},
    {id:14,nombre:"Teclado Corsair K95", imagen:"./img/teclado/k95.jpg ",categoria:{nombre:"teclado",id:"teclado"},precio:8000},
    {id:15,nombre:"Teclado Corsair K100", imagen:"./img/teclado/k100.jpg ",categoria:{nombre:"teclado",id:"teclado"},precio:9000},
];

const arrayProductos = document.querySelector(".contenedor-productos");

function cargarProductosStock(){
    productos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
        <img class ="producto-imagen" src="${producto.imagen}" alt="">
            <div class=" prodcuto-detalles" >
              <h3 class="nombre-producto">${producto.nombre}</h3>
              <p class="precio-producto">$ ${producto.precio}</p>
              <button class="agregar-producto" id = ${producto.id}>Agregar</button>
            </div>     
        `;
        arrayProductos.append(div);
    });
}

cargarProductosStock();