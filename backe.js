var valorEntrada = 200;

function resumen() {
    var cantidadEntradas = document.getElementById("cantidadentradas").value;
    var porcentaje = document.getElementById("porcentajedescuento").value;
    var subTotal =(cantidadEntradas * valorEntrada);
    var descuento = (subTotal * porcentaje)/100;
    var totalFinal =(subTotal - descuento); 
    document.getElementById("totalprice").value=("Total a pagar: $ " + totalFinal);
    

}


