"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese el primer numero: ");
console.log("El primer número es: " + primerNumero);
var segundoNumero = readlineSync.questionInt("Ingrese el segundo numero: ");
console.log("El segundo número es: " + segundoNumero);
// ahora imprimimos resultado de la suma de ambos numeros
var resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es " + resultado);
