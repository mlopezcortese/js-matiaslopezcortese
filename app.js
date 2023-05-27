
let clave = "1234";

function loguear (){

    let acceso = false;

    for (let i = 2; i>=0; i--){
        let claveCorrecta = prompt("ingrese clave")
        if (claveCorrecta === clave){
            alert ("Contraseña correcta");
            acceso = true;
            break;
        } else {
            alert ("contraseña incorecta")
        }
    }
    return acceso
}



if (loguear()){



const juegos = [
{id:1,nombre:"Elden Ring",genero:"rpg", precio:2100, disponible:true},
{id:2,nombre:"Sekiro",genero:"rpg", precio:2200, disponible:true},
{id:3,nombre:"Warzone",genero:"shooter", precio:2300, disponible:true},
{id:4,nombre:"Gta",genero:"aventura", precio:2400,disponible:true},
{id:5,nombre:"Red Dead",genero:"aventura", precio:2500, disponible:true},
];

let carrito = []

let seleccion = prompt("Seleccion Opción \n 1 - comprar juegos \n 2 -  buscar juego ");


if(seleccion == "1"){
let juegosDisponibles = juegos.map(
    (juegos)=> juegos.nombre + " $" +juegos.precio
);
alert (juegosDisponibles.join("\n"))
} else(seleccion == "2")


if(seleccion == 1){
    let juego = prompt("Selecciona el juego a comprar")
    let precio = 0

    if(juego == "Elden Ring" || juego == "Sekiro" || juego == "Warzone"|| juego == "Gta"|| juegoo == "Red Dead"){
        switch (juego) {
            case "Elden Ring":
             precio = 2100;   
             break;
            case "Sekiro":
             precio = 2200;  
                break;
            case "Warzone":
                precio = 2300;
             break;
            case "Gta":
                precio = 2400;
             break;
            case "Red Dead":
                precio = 2500;
                break;

            default:
            break;
        }
        carrito.push({juego,precio})
        console.log(carrito)
    }else{
       alert("juego no encontrado")
    }
   
    carrito.forEach((carritoFinal) => {
    alert(`juego: ${carritoFinal.juego}, total a pagar: ${carritoFinal.precio}`)
    })    
    }
    
   



function  stockJuegos (stock, nombre) {
    return stock.filter (p => p.nombre == nombre);
}


function disponibleJuegos(juegos){
    let lista = " " ;
    for (const juego of juegos){
        lista += "el Juego"+ " " + juego.nombre+ " " + " Cuesta $"+ juego.precio
    }
    return lista;
}

for (let i = 0; i < 1 ; i++){
    let filtro = stockJuegos (juegos,prompt ("Ingresar Nombre de juego a Buscar"));
    if (filtro.length > 0){
        alert(disponibleJuegos(filtro));
    }else{
        alert("Juego no encontrado")
    }
}}