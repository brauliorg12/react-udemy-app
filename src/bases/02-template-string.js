const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;

// Ejemplo con Template String
const nombreCompleto = `
${nombre}
${apellido}
${1 + 1}
 `;

console.log(nombreCompleto);

// Ejemplo de función
function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
