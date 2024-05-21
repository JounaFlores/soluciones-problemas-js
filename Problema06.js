// Función para encontrar el número más pequeño y el más grande en un array
function encontrarMinMax(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return { min, max };
}

// Solicita al usuario cuántos números quiere ingresar
let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar al array?"));

// Inicializa el array
let numeros = [];

// Solicita al usuario que ingrese los números
for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt("Por favor, ingresa el número " + (i + 1) + ":"));
    numeros.push(numero);
}

// Encuentra el número más pequeño y el más grande
let resultado = encontrarMinMax(numeros);

// Muestra los resultados
alert("El número más pequeño es: " + resultado.min);
alert("El número más grande es: " + resultado.max);
