var precioProducto = 100;
var cantidad = 12;
var precioTotal = precioProducto * cantidad;
var descuento = precioTotal * 0.1;
console.log("El total de su compra es: " + precioTotal);
if (precioTotal > 1000) {
    console.log("Su total con descuento es: " + (precioTotal - descuento));
}
