"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var posicionLlegada = rls.questionInt("Ingrese la posicion de llegada");
switch (posicionLlegada) {
    case 1:
        console.log("Recibe medalla de oro");
        break;
    case 2:
        console.log("Recibe medalla de plata");
        break;
    case 3:
        console.log("Recibe medalla de bronce");
        break;
    default:
        console.log("Recibe certificado de participacion");
}
