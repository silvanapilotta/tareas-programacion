"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var tanqueLleno;
console.log("estatus de combustible");
tanqueLleno = rls.question("Cargaste combustible? S/N: ");
while (tanqueLleno == "N") {
    console.log("Cargar combustible");
    tanqueLleno = rls.question("¿Cargaste combustible? S/N: ");
}
console.log("Tanque Lleno");
