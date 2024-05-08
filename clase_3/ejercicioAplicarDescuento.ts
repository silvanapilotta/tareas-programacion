let precioProducto : number = 100
let cantidad : number = 9
let precioTotal : number = precioProducto*cantidad
let descuento :number = precioTotal*0.1


console.log("El total de su compra es: " + precioTotal);

if (precioTotal > 1000) {
    console.log("Su total con descuento es: " + (precioTotal-descuento));
}