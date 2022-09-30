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
