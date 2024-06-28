// Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!"
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Declara una variable llamada nombre y asígnale el valor "Luna".
var nombre = "Luna";

// Crea una variable llamada edad y asígnale el valor 25.
var edad = 25;

// Establece una variable numeroDeVentas y asígnale el valor 50.
var numeroDeVentas = 50;

// Establece una variable saldoDisponible y asígnale el valor 1000.
var saldoDisponible = 1000;

// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
nombre = prompt("¿Cuál es tu nombre?");
if (!nombre) {
    alert("¡Error! Completa todos los campos");
} else {
    // Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
    edad = prompt("¿Cuál es tu edad?");
    if (!edad) {
        alert("¡Error! Completa todos los campos");
    } else {
        // Imprime lo que se introdujo
        alert("Nombre: " + nombre);
        alert("Edad: " + edad);

        // Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
        if (edad >= 18) {
            alert("¡Puedes obtener tu licencia de conducir!");
        }
    }
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

//Modulo3

// Desafío 1: Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
var contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafío 2: Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

// Desafío 3: Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
var numeroFinal = prompt("Ingresa un número:");
numeroFinal = parseInt(numeroFinal);  // Asegurarse de que sea un número entero
contador = 0;
while (contador <= numeroFinal) {
    console.log(contador);
    contador++;
}
