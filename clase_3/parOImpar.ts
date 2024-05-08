import * as rls from 'readline-sync';

let numeroAComprobar : number = rls.questionInt("Ingrese el numero a verificar: ");

if (numeroAComprobar == 0) {
    console.log("El numero ingresado es cero");
}else if (numeroAComprobar %2 == 0){
    console.log("El numero ingresado es par");
}else{
    console.log("El numero ingresado es impar");
}


