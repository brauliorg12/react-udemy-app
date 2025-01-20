import { environment } from '../environments/environment';

const { apiKey, endpointRandom } = environment;

// Función que realiza una petición a la API de Giphy utilizando async/await
export const getImagenPromesa = async () => {
  // Manejo de Try/Catch para capturar errores
  try {
    // Realización de la petición a la API de Giphy
    const resp = await fetch(
      `${endpointRandom}?api_key=${apiKey}&tag=cat&rating=g`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  } catch (error) {
    // manejo de errores
    console.warn(error);
  }
};
