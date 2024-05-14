console.log("Multiplos de 2 y 3" + ("\n") );

let i : number=0

for (i=1; i <=100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);

        if(i % 6 ===0){
            i++
        }
    }
}