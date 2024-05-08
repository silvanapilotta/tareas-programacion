"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: ");
var altura = readlineSync.questionInt("Ingrese la altura: ");
var areaTriangulo = (base * altura) / 2;
console.log("El area del triangulo es: " + areaTriangulo);
