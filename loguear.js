function login(){
   
let user
let pasword

user = document.getElementById("usuario").value;
pasword = document.getElementById("contraseña").value

    if(user == "matias" && pasword =="1234"){
        window.location = "index2.html";
    }else{
        alert("conmtraseña incorrecta")
    }


}
