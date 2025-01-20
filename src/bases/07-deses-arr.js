const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// Desestructuración de un arreglo
const [, , p3] = personajes;
console.log(p3);

// Desestructuración de un arreglo con una función
const retornaArreglo = () => {
  return ['ABC', 123];
};

// Desestructuración de un arreglo con una función y asignación a variables
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo se llamará setNombre
const retornaArreglo2 = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola Mundo');
    },
  ];
};

const arr = retornaArreglo2('Goku');

// Desestructuración de un arreglo con una función y asignación a variables
const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();
