"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nota, suma, promedio, contador;
suma = 0;
for (contador = 1; contador < 11; contador++) {
    nota = rls.question("Ingrese nota" + contador + ": ");
    suma + nota;
}
promedio = suma / 10;
console.log("El promedio de notas es: " + promedio);
