// Solicita al usuario su nombre de usuario
let usuario = prompt("Por favor, ingresa tu nombre de usuario:");

// Verifica el nombre de usuario ingresado
if (usuario === 'Admin') {
    // Solicita la contraseña si el nombre de usuario es 'Admin'
    let contraseña = prompt("Por favor, ingresa tu contraseña:");

    if (contraseña === 'Jedi') {
        alert("¡Que la fuerza te acompañe!");
    } else if (contraseña === '' || contraseña === null) {
        alert("Cancelado");
    } else {
        alert("Contraseña incorrecta");
    }
} else if (usuario === '' || usuario === null) {
    alert("Cancelado");
} else {
    alert("No te conozco");
}
