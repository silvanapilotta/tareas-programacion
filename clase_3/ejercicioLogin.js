"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario = "Juan";
var contraseña = "claveJuan";
var rls = require("readline-sync");
var ingreseUsuario = rls.question("ingrese usuario: ");
var ingreseContraseña = rls.question("ingrese clave");
if (ingreseUsuario == usuario) {
    if (ingreseContraseña == contraseña)
        console.log("Acceso otorgado");
}
else {
    console.log("Usuario o contraseña incorrectos");
}
