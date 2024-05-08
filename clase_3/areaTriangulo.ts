import * as readlineSync from 'readline-sync';
let base = readlineSync.questionInt("Ingrese la base: ");
let altura = readlineSync.questionInt("Ingrese la altura: ");
let areaTriangulo : number = (base*altura) /2;
console.log("El area del triangulo es: " + areaTriangulo);
