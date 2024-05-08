import * as rls from 'readline-sync';

let tanqueLleno : string;
console.log("estatus de combustible");

tanqueLleno = rls.question("Cargaste combustible? S/N: ");

while (tanqueLleno == "N") {
    console.log("Cargar combustible");
    tanqueLleno= rls.question("¿Cargaste combustible? S/N: ");
}
 
console.log("Tanque Lleno");



