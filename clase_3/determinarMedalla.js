"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var puestoLlegada = rls.questionInt("Ingrese la posicion final de la carrera: ");
if (puestoLlegada == 1) {
    console.log("Recibe medalla de oro");
}
else {
    if (puestoLlegada == 2) {
        console.log("Recibe medalla de plata");
    }
    else {
        if (puestoLlegada == 3) {
            console.log("Recibe medalla de bronce");
        }
        else {
            console.log("Recibe certificado de participacion");
        }
    }
}
