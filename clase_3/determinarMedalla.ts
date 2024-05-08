import * as rls from 'readline-sync';
let puestoLlegada : number = rls.questionInt("Ingrese la posicion final de la carrera: ");

if (puestoLlegada == 1){
    console.log("Recibe medalla de oro");
}else{
    if (puestoLlegada == 2){
        console.log("Recibe medalla de plata");
    }else{
        if (puestoLlegada == 3){
            console.log("Recibe medalla de bronce");
        }else{
            console.log("Recibe certificado de participacion");
             }
        }
    }