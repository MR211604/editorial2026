//Exportar las variables de entorno para producción
const apiUrl = import.meta.env.VITE_EDITORIAL_LOCAL_API_URL || "/api";

export const env = {
  API_URL: apiUrl,
  BASE_URL: import.meta.env.BASE_URL || "/",
  LOCATION_IMAGES_URL:
    import.meta.env.VITE_EDITORIAL_LOCATION_IMAGES_URL ||
    `${apiUrl.replace(/\/+$/, "")}/imageslocations`,
  CONTENT_IMAGES_URL:
    import.meta.env.VITE_EDITORIAL_CONTENT_IMAGES_URL ||
    `${apiUrl.replace(/\/+$/, "")}/imagescontent`,
  FILES_URL: import.meta.env.VITE_EDITORIAL_FILES_URL || "/editorial_files",
  CURATOR_API_URL:
    import.meta.env.VITE_CURATOR_API_URL || "https://api.curator.io/v1/feeds/",
  CURATOR_FEED_ID: import.meta.env.VITE_CURATOR_FEED_ID || null,
};
