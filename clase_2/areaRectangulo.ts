console.log(5*10);

let base : number = 5;
let altura : number = 10;
let area : number = base*altura;
console.log("el area del rectangulo es " + area);

console.log("comprar");
console.log("azucar y aceite");

let saludo : string = "Hola Compas";
console.log(saludo);

let numero : number = 10;
console.log(numero);

numero = 20;
console.log(numero);
console.log("\n");
console.log("\n");

// ahora repetimos el calculo del area, pero el usuario ingresa los datos por pantalla

import * as readlineSync from 'readline-sync';
let base2 : number = readlineSync.questionInt("Ingrese la medida de la base: ");
console.log("Medida de la base: " + base2);
let altura2 : number =readlineSync.questionInt("Ingrese la medida de la altura: ");
console.log("Medida de la altura: " + altura2);

let area2 : number = base2 * altura2;
console.log("El area del rectangulo es: " + area2);



