//Exportar las variables de entorno para producción
export const env = {
  API_URL: import.meta.env.VITE_EDITORIAL_LOCAL_API_URL || "/api",
  BASE_URL: import.meta.env.BASE_URL || "/",
  FILES_URL: import.meta.env.VITE_EDITORIAL_FILES_URL || "/editorial_files",
  CURATOR_API_URL:
    import.meta.env.VITE_CURATOR_API_URL || "https://api.curator.io/v1/feeds/",
  CURATOR_API_KEY: import.meta.env.VITE_CURATOR_API_KEY || null,
};
