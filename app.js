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
