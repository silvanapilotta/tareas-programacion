"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var esperandoElCole;
esperandoElCole = rls.question("Llego el colectivo? S/N: ");
while (esperandoElCole == "N") {
    console.log("Esperando el Colectivo");
    esperandoElCole = rls.question("Llego el colectivo? S/N: ");
}
console.log("Llego el colectivo");
