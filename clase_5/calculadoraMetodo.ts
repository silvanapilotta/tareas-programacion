import * as rls from 'readline-sync';

let numero1 = rls.questionInt("Ingrese un numero: ");
let numero2 = rls.questionInt("Ingrese otro numero: ");
let opcionMenu = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion : number = 0



function calcularResultado (numero1:number, numero2:number, opcionMenu:number):number {
	let resultado:number = 0;
 if (opcionMenu == 1) {
        resultado = numero1 + numero2;   
    } else if (opcionMenu == 2) {
        resultado = numero1 - numero2;   
    }
return resultado;
}

resultadoFuncion = calcularResultado(numero1,numero2,opcionMenu);


dibujarGuionesN (resultadoFuncion);
console.log("el resultado es: ", resultadoFuncion);
dibujarGuionesN (resultadoFuncion);
 
function dibujarGuionesN (n : number){
    let i : number
    let linea : string = ""
    for (i=1; i<=n; i++){
        linea += "-";
    }
console.log(linea);
}

//funciona pero no puedo agregar la opcion de ingresar otro numero para salir