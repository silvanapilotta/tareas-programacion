import * as rls from 'readline-sync';
let nroDeseado : number = rls.questionInt("Escriba el numero que desea verificar si es mayor o no a 20: ");

if (nroDeseado>20) {
    console.log("El numero es mayor a 20:" + nroDeseado);
    }else{
        console.log("El numero es menor o igual a 20: " + nroDeseado);
    }

