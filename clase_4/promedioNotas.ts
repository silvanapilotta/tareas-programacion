import * as rls from 'readline-sync';
let nota: number, suma: number, promedio: number, contador: number;

contador= 1
suma= 0

while (contador <=10){
    nota= rls.questionInt("Ingrese la nota: ");
    suma = suma + nota;
    contador = contador + 1;
}

promedio= suma/10

console.log("El promedio de las notas es: " + promedio);