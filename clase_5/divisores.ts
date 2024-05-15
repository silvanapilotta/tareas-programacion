
let cantidad : number = 0 

function cantidadDeDivisores(nroEntero:number): number{
    let contador:number = 0
    for (contador=0; contador<=nroEntero ; contador++){
        if (nroEntero % contador == 0 ){
            cantidad++
        }
    } 
    return (cantidad)
}

console.log("el numero tiene " + cantidadDeDivisores(17) + " divisores");

