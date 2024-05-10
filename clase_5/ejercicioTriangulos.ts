let i : number ; 

for (i=1; i <= 100 ; i++){
    console.log("El area es: " + cacularAreaTriangulo(i , i*2))

}

function cacularAreaTriangulo (base:number, altura: number): number{
    return (base*altura / 2)
}

//funciona