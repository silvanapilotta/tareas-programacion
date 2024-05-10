/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 
*/

import * as rls from 'readline-sync';
 let base : number = rls.questionInt("Ingrese la base: ");
 let exponente : number = rls.questionInt("Ingrese el exponente: ");
 let resultado : number = 1;
 let i : number = 0
 
 function calcularExponente(nro1 : number, nro2 : number) : number{
    resultado = 1;
    for (i=0; i<exponente; i++){
        resultado = resultado * base
    }

    return resultado;
 }

    if (exponente >0){
        resultado = calcularExponente(base, exponente);
        console.log("El resultado es: " + resultado);
    }else{
        console.log("Por favor ingrese un exponente mayor a 0")
    }

    
 