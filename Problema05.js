// Función para calcular el monto total de la factura
function calcularMontoTotal(precio1, precio2, precio3, impuesto) {
    let subtotal = precio1 + precio2 + precio3;
    let totalImpuesto = subtotal * (impuesto / 100);
    let total = subtotal + totalImpuesto;
    return total;
}

// Solicita el precio de los tres platos
let precio1 = parseFloat(prompt("Por favor, ingresa el precio del primer plato:"));
let precio2 = parseFloat(prompt("Por favor, ingresa el precio del segundo plato:"));
let precio3 = parseFloat(prompt("Por favor, ingresa el precio del tercer plato:"));

// Solicita el impuesto que debe ser cobrado
let impuesto = parseFloat(prompt("Por favor, ingresa el porcentaje del impuesto:"));

// Calcula el monto total de la factura
let montoTotal = calcularMontoTotal(precio1, precio2, precio3, impuesto);

// Muestra el monto total de la factura
alert("El monto total de la factura es: $" + montoTotal.toFixed(2));
