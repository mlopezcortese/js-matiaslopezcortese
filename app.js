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

function compra(valor) {
    if(valor>10000){
        valor-descuento1
        return (valor-descuento1)

    }else if(valor<=10000 && valor>=5000){
        valor-descuento2
        return (valor-descuento2)

    }else(valor<5000)
      
        return(valor)
}


let valor = Number(prompt("Ingrese compra"));
let descuento1 = valor*25/100;
let descuento2 = valor*10/100

alert(compra(valor));
}