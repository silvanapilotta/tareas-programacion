let usuario : string = "Juan";
let contraseña : string = "claveJuan"

import * as rls from 'readline-sync';
let ingreseUsuario : string = rls.question("ingrese usuario: ");
let ingreseContraseña : string = rls.question("ingrese clave: ");

if (ingreseUsuario == usuario){
    if (ingreseContraseña == contraseña)
    console.log("Acceso otorgado");
}else{
    console.log("Usuario o contraseña incorrectos");
}