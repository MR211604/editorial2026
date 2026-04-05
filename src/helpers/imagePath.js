import { env } from "../config/env";

/**
 * Helper para obtener la URL correcta de imágenes estáticas
 * Maneja automáticamente el base path en desarrollo y producción
 */
export function getImagePath(path) {
  // Si el path ya empieza con /, lo quitamos para evitar doble slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${env.BASE_URL}${cleanPath}`;
}

export function getPublishingImagePath(publishing) {
  if (publishing?.type?.name === "Revista") {
    return `${env.FILES_URL}revistas/${publishing?.category?.URL}/${publishing.cover}`;
  } else if (publishing?.type?.name === "Libro") {
    return `${env.FILES_URL}libros/${publishing?.category?.URL}/${publishing.cover}`;
  }
}
