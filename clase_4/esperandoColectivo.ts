import * as rls from 'readline-sync';

let esperandoElCole : string;

esperandoElCole = rls.question("Llego el colectivo? S/N: ");

while (esperandoElCole == "N"){
    console.log("Esperando el Colectivo");
    esperandoElCole = rls.question("Llego el colectivo? S/N: ");
}

console.log("Llego el colectivo");