import { environment } from '../environments/environment';

const { apiKey, endpointRandom } = environment;

// Función que realiza una petición a la API de Giphy
const peticion = () =>
  fetch(`${endpointRandom}?api_key=${apiKey}&tag=cat&rating=g`);

// Ejemplo de promesas encadenadas o en cadena
peticion()
  .then((response) => response.json())
  // Desestructuración de objetos de la respuesta e inserción de la imagen al DOM
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
