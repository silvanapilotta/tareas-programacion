import * as readlineSync from 'readline-sync';
let precioProducto = readlineSync.questionInt ("Ingrese el precio del producto: ");
let precioDescuento : number =precioProducto*0.1    
let precioFinal : number;
precioFinal = (precioProducto - (precioProducto * precioDescuento / 100));
console.log("El precio a pagar es de: $" + precioFinal);