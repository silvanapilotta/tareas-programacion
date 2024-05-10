import * as rls from 'readline-sync';
let i : number, linea : string ;
let numero1 : number = rls.questionInt("Ingrese un nnumero: ");
let numero2 : number = rls.questionInt("ingrese otro numero: ");
let menu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");

linea = "";
    for (i=0; i<=40; i++){
        linea= linea + "-";
    }

if (menu == 1){
    
    console.log(linea);
    console.log("El resultado es:", numero1 + numero2);
    console.log(linea);
    
}else if (menu == 2){
    
    console.log(linea);
    console.log("El resultado es:", numero1 - numero2);
    console.log(linea);
}

//funciona perfecto