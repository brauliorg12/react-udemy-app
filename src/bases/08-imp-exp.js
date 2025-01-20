// Importacion de constantes por defecto y exportadas normalemente
import heroes, { owners } from '../data/heroes';

// console.log(heroes);

// Funcion para buscar un heroe por su id utilizando el metodo find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2)); // { id: 2, name: 'Batman', owner: 'DC' }

// Funcion para buscar un heroe por su owner utilizando el metodo filter
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroeByOwner('Marvel')); // [ { id: 1, name: 'Spiderman', owner: 'Marvel' }, { id: 3, name: 'Wolverine', owner: 'Marvel' } ]

// Importacion de Ownes
// console.log(owners); // ['DC', 'Marvel']



