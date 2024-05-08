"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numeroAComprobar = rls.questionInt("Ingrese el numero a verificar: ");
if (numeroAComprobar % 2) {
    console.log("El numero ingresado es par");
}
else if (numeroAComprobar == 0) {
    console.log("El numero ingresado es 0");
}
else {
    console.log("El numero ingresado es impar");
}
