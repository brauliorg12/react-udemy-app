console.log("Hola Mundo");

const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Ejemplo de const con el mismo nombre, pero en otro scope
if (true) {
  const nombre = "Peter";
  console.log(nombre);
}

console.log(valorDado);
