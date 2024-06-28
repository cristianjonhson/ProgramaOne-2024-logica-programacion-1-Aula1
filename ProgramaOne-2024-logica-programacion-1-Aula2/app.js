//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}

//Modulo2 

// Desafío 1: Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
var diaDeLaSemana = prompt("¿Qué día de la semana es?");
if (diaDeLaSemana.toLowerCase() === "sábado" || diaDeLaSemana.toLowerCase() === "sabado" || diaDeLaSemana.toLowerCase() === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// Desafío 2: Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
var numero = prompt("Ingresa un número:");
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// Desafío 3: Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Inténtalo nuevamente para ganar.".
var puntuacion = prompt("Ingresa tu puntuación:");
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar.");
}

// Desafío 4: Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
var saldoDisponible = 1000; // Puedes cambiar este valor según sea necesario
alert(`Tu saldo disponible es: $${saldoDisponible}`);

// Desafío 5: Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
var nombreUsuario = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido/a, ${nombreUsuario}!`);
