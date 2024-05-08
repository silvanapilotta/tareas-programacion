import * as readlineSync from 'readline-sync';
let vuelta1 = readlineSync.questionInt("tiempo primer vuelta: ");
let vuelta2 = readlineSync.questionInt("tiempo segunda vuelta: ");
let vuelta3 = readlineSync.questionInt("tiempo tercer vuelta: ");
let vuelta4 = readlineSync.questionInt("tiempo cuarta vuelta: ");
let tiempoTotal : number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("Tiempo total: " + tiempoTotal);
let promedioDeVuelta : number = tiempoTotal / 4;
console.log("El promedio de vuelta es de: " + promedioDeVuelta);
