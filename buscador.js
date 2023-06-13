/*
const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton-buscar");
const resultado =document.querySelector("#resultado")


const filtrar = () => {
    //console.log(formulario.value)
    resultado.innerHTML = ''

    const texto = formulario.value.toLowerCase()
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) != -1){
            resultado.innerHTML += `
            <img class ="imagen-producto" src=${producto.img} alt= "">
            <h3>${producto.nombre}</h3>
            <p>${producto.categoria}</p>
            <p class="precio-producto">Precio:$ ${producto.precio}</p>
            <button id="agregar${producto.id}" class="boton-agregar">Agregar
            `
        }
    }
    if(resultado.innerHTML === '')
        resultado.innerHTML += `
        <li>Producto no encontrado</li>
        `
}

boton.addEventListener("click",filtrar)
formulario.addEventListener("keyup",filtrar)

filtrar();
*/