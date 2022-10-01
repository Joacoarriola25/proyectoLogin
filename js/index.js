function saludar() {
    alert("¡Hola formuleros!")
}
saludar()


let nombre = prompt("Ingresar nombre")
let apellido = prompt("Ingresar apellido")


if((nombre !="") || (apellido !="")){
    alert("Nombre: " +nombre +"\nApellido: " +apellido);
}  else {
    alert("Debes ingresar tu nombre y apellido")
}



function solicitarUsuario () {
    let usuario = prompt("Ingresar usuario")
    let contraseña = prompt("Ingresar contraseña")
    if((usuario !="") || (contraseña !="")){
    alert("Bievenido: " +usuario);
}  else {
    alert("Debes ingresar un usuario o contraseña valido")
} 
}
solicitarUsuario()


function recuperarContra(reset) 
{
    let seguir;

    do {
        reset = alert("Olvidaste tu contraseña?")
        seguir = prompt("Desea recuperarla? si/no");    
    } while (seguir == 'si')
}

recuperarContra()





let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 5; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}
