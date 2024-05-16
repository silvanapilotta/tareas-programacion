import * as rls from 'readline-sync';

//cuando llenamos con los elementos, no es necesario poner  = new Array (12)
let arregloMes : string []=  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]


 
let nroMes : number = rls.questionInt("Ingrese el numero del mes: ");

 let indice : number = nroMes -1;

console.log ("El mes es: " + arregloMes [indice]);
     
