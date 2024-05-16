/*Implemente un método llamado imprimirNombre que reciba un
nombre y un apellido y devuelva los dos datos concatenados
en una variable de tipo string.
El string devuelto debe imprimirse por consola.

• Refactorizar el método dibujarGuiones utilizado para el
ejercicio de la calculadora realizado anteriormente*/

import * as rls from 'readline-sync';
let ingreseNombre : string = rls.question("Ingrese el nombre: ");
let ingreseApellido : string = rls.question("Ingrese el apellido: ")
function imprimirNombre(ingreseNombre: string , ingrese : string) : string {
    let nombreCompleto : string = ingreseNombre +(" ") +  ingreseApellido;
    return nombreCompleto
}
 console.log (imprimirNombre(ingreseNombre, ingreseApellido));
