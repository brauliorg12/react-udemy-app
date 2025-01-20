// Funciones en JS - Arrow Functions
const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

// Funciones de flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// Funciones de flecha mejorando return
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gohan'));
console.log(saludar4());

// Funcion que retorna un objeto
const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502',
});

const user = getUser();

console.log(user);

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);

// Resultado esperado de la Tarea
const getUsuarioActivoMejorado = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
});

const usuarioActivoMejorado = getUsuarioActivoMejorado('Fernando');

console.log(usuarioActivoMejorado);
