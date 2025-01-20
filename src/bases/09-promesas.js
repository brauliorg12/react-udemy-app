import { getHeroeById } from './bases/08-imp-exp';

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Tarea asíncrona de importar un heroe dentro de la promesa
    const heroe = getHeroeById(2);
    resolve(heroe);
    // reject('No se pudo encontrar el héroe');
  }, 2000);
});

// Ejecución de la Promesa con el método then y catch
promesa
  .then((res) => {
    console.log('heroe', res);
  })
  .catch((err) => {
    console.warn(err);
  });

// Ejemplo de promesa con resolve y reject importando una función que retorna una promesa
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el héroe');
      }
    }, 3000);
  });
};

// Implementación de la promesa enviando funciones que por defecto retornan una funcion con el parametro ejemplo: return console.wan(err)
getHeroeByIdAsync(1).then(console.log).catch(console.warn);
