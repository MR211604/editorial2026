const baseURL = import.meta.env.VITE_EDITORIAL_LOCAL_API_URL;

/**
 * Function que sirve para hacer llamadas a la API sin necesidad de un token de autenticación.
 * @param {string} endpoint - El endpoint de la API al que se desea hacer la llamada
 * @param {object} data - La data que se envia (para tipo POST, PUT, DELETE)
 * @param {string} method - Metodo HTTP (GET, POST, PUT, DELETE)
 * @param {string} URL - URL base opcional para sobreescribir la baseURL
 * @returns {Promise<object>} - La respuesta de la peticion en formato JSON
 */
export const fetchWithoutToken = async (endpoint, data, method, URL = null) => {
  if (method === "GET") {
    if (URL !== null) {
      const response = await fetch(`${URL}/${endpoint}`);
      return await response.json();
    }
    const response = await fetch(`${baseURL}/${endpoint}`);
    return await response.json();
  } else {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
};
