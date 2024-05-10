import * as rls from 'readline-sync';

let numeroIngresado : number = rls.questionInt("Ingrese el numero a comprobar: ");

if (numeroIngresado == 0){
    console.log("El numero ingresado debe ser mayor a 0");
    let numeroIngresado : number = rls.questionInt("Ingrese el numero a comprobar: ");
    if (numeroIngresado %2 ==0){
        console.log("El numero ingresado es par");
    }else{
        console.log("El numero ingresado es impar");
    }
}else if(numeroIngresado %2 != 0){
    console.log("El numero ingresado es impar");
}else if (numeroIngresado %2 == 0 ) {
    console.log("El numero ingresado es par");
}

//funciona