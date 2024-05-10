
//declaro la funcion que voy a llamar cuando necesite dibujar guiones, pudiendo 
//modificar la cantidad que necesito en casa ocasion

function dibujarGuionesN (n : number){
    let i : number
    let linea : string = ""
    for (i=1; i<=n; i++){
        linea += "-";
    }
console.log(linea);
}

import * as rls from 'readline-sync';
let i : number, linea : string ;
let numero1 : number = rls.questionInt("Ingrese un numero: ");
let numero2 : number = rls.questionInt("ingrese otro numero: ");
let menu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");

if (menu == 1){
    dibujarGuionesN(60);
    console.log("El resultado es:", numero1 + numero2);
    dibujarGuionesN(60);
}else if (menu ==2){
    dibujarGuionesN(10);
    console.log("El resultado es: ", numero1 - numero2);
    dibujarGuionesN(10);
}

//funciona