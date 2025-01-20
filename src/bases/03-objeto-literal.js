const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 25,
  direccion: {
    ciudad: 'New York',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

// console.table( persona );

// Se realiza una copia de persona utilizando el operador spread (...) y se modifica el nombre
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
