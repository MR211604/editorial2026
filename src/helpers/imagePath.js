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

export function getLocationImagePath(image) {
  if (!image) return "";
  if (/^data:/i.test(image)) return image;

  let path = image;
  const isAbsoluteUrl = /^(https?:)?\/\//i.test(image);

  if (isAbsoluteUrl) {
    try {
      path = new URL(image.startsWith("//") ? `https:${image}` : image).pathname;
    } catch {
      return image;
    }
  }

  const cleanPath = path.replace(/^\/+/, "");
  const locationPathIndex = cleanPath.indexOf("imageslocations/");

  if (locationPathIndex >= 0) {
    path = cleanPath.slice(locationPathIndex + "imageslocations/".length);
  } else if (isAbsoluteUrl) {
    return image;
  } else if (cleanPath.startsWith("img/logos_ubicaciones/")) {
    return getImagePath(cleanPath);
  }

  const filename = path.replace(/^\/+/, "");
  const imagesUrl = env.LOCATION_IMAGES_URL.replace(/\/+$/, "");
  return `${imagesUrl}/${filename}`;
}

export function getMdxImagePath(image) {
  if (!image || /^(data:|blob:)/i.test(image)) return image || "";

  let path = image;
  const isAbsoluteUrl = /^(https?:)?\/\//i.test(image);

  if (isAbsoluteUrl) {
    try {
      path = new URL(image.startsWith("//") ? `https:${image}` : image).pathname;
    } catch {
      return image;
    }
  }

  const cleanPath = path.replace(/^\/+/, "");
  const imageDirectoryIndex = cleanPath.lastIndexOf("imagescontent/");

  if (imageDirectoryIndex >= 0) {
    const filename = cleanPath.slice(imageDirectoryIndex + "imagescontent/".length);
    const imagesUrl = env.CONTENT_IMAGES_URL.replace(/\/+$/, "");
    return `${imagesUrl}/${filename}`;
  }

  if (isAbsoluteUrl) return image;
  if (cleanPath.includes("/")) return getImagePath(cleanPath);

  const imagesUrl = env.CONTENT_IMAGES_URL.replace(/\/+$/, "");
  return `${imagesUrl}/${cleanPath}`;
}

export function getPublishingImagePath(publishing) {
  if (publishing?.type?.name === "Revista") {
    return `${env.FILES_URL}revistas/${publishing?.category?.URL}/${publishing.cover}`;
  } else if (publishing?.type?.name === "Libro") {
    return `${env.FILES_URL}libros/${publishing?.category?.URL}/${publishing.cover}`;
  }
}
