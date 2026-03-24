const baseURL = import.meta.env.VITE_EDITORIAL_LOCAL_API_URL;

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
