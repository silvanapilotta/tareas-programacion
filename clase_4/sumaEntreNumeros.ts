import * as rls from 'readline-sync';

let numero1 : number = rls.questionInt("Ingrese el numero menor: ");
let numero2 : number = rls.questionInt("Ingrese el numero mayor: ");

let suma : number = 0
let contador : number

for(contador=numero1; contador<=numero2; contador++){
    suma= suma+contador
}
console.log("La suma entre " + numero1 + " y " + numero2 + " es igual a " + suma )

