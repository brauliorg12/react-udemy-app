// Desestructuración
// Asignación desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// Desestructuración de argumentos de una función
const retornaPersona = ({ clave, edad, rango = 'Capitán' }) => {
  // console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

// Desestructuración de un objeto anidado
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);

console.log(nombreClave, anios);

console.log(lat, lng);
