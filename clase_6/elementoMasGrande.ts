let arregloNumero : number [] = [4,7,9,3,1,45,67,23,29,78,11,16];

function numeroMasGrande (array: number []): number{
    let elMayor : number = array [0];
    let i :number;
    for ( i=1; i<array.length; i++){
        if (array [i]> elMayor){
            elMayor = array[i];
        }
    }
    return elMayor
}

let resultado = numeroMasGrande(arregloNumero);
console.log("El numero mas grande de la lista es: "+ resultado);