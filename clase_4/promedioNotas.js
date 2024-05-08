"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nota, suma, promedio, contador;
contador = 1;
suma = 0;
while (contador <= 10) {
    nota = rls.questionInt("Ingrese la nota: ");
    suma = suma + nota;
    contador = contador + 1;
}
promedio = suma / 10;
console.log("El promedio de las notas es: " + promedio);
