import * as rls from 'readline-sync';

const clave : string = "eureka";
let contador : number = 1
let intentos : number = 3
let ingreseClave: string
 //uso while porque va a ir haciendo la comparacion, y no contara las 3 vueltas completas como con el for

 ingreseClave = rls.question("Ingrese la clave: ");
 while (contador < intentos && ingreseClave != clave) {
      ingreseClave = rls.question("Ingrese la clave: ");
      contador++;
    }
    
if ( clave == ingreseClave){
   console.log("Clave aceptada");
}else{
   console.log("Se han agotado las oportunidades");
}
