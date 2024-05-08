"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("Ingrese el precio del producto: ");
var precioDescuento = precioProducto * 0.1;
var precioFinal;
precioFinal = (precioProducto - (precioProducto * precioDescuento / 100));
console.log("El precio a pagar es de: $" + precioFinal);
