// Solicita al usuario que ingrese un número
let numero = prompt("Por favor, ingresa un número:");

// Convierte la entrada del usuario a un número
numero = Number(numero);

// Verifica el valor del número ingresado y muestra la alerta correspondiente
if (numero === 0) {
    alert(0);
} else if (numero > 0) {
    alert(1);
} else {
    alert(-1);
}
