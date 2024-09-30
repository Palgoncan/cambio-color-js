// Este código JavaScript agrega un evento que cambia el color de fondo de la página web cuando se
// hace clic en un botón. El nuevo color de fondo se genera de forma aleatoria como un valor
// hexadecimal.

document.addEventListener("DOMContentLoaded", function() {
  // Esta función genera un valor hexadecimal de color de fondo aleatorio para el color de fondo
  function generarColorHexadecimal() {
    // '16777215' representa el valor decimal máximo para un color RGB de 24 bits, que es 'FF FF FF' en hexadecimal
    // Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    // Multiplicar el número aleatorio por 16777215 da como resultado un valor decimal entre 0 y 16777215
    // Convertir el valor decimal a una cadena hexadecimal usando el método toString(16)
    // El resultado puede tener entre 1 y 6 caracteres, así que usamos padStart(6, '0') para agregar ceros
    // al principio si es necesario; asegurando que la cadena resultante siempre tenga 6 caracteres,
    // con o sin ceros al principio
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  // Obtener el botón y el párrafo para mostrar el código de color
  const botonColor = document.getElementById('boton-color');
  const parrafoColor = document.getElementById('color');
  const body = document.body;

  // Agrega un evento al botón que cambia el color de fondo y actualiza el código de color
  botonColor.addEventListener('click', function() {
    const colorHexadecimal = generarColorHexadecimal();

    // Mostrar el código de color en el párrafo
    parrafoColor.textContent = colorHexadecimal;

    // Establecer el color de fondo del cuerpo con el código de color generado
    body.style.backgroundColor = colorHexadecimal;
  });
});