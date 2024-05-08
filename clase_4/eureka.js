"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var clave = "eureka";
var contador = 1;
var intentos = 3;
var ingreseClave;
//uso while porque va a ir haciendo la comparacion, y no contara las 3 vueltas completas como con el for
ingreseClave = rls.question("Ingrese la clave: ");
while (contador <= intentos && ingreseClave == clave) {
    ingreseClave = rls.question("Ingrese la clave: ");
}
