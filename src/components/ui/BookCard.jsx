import { getPublishingImagePath } from "../../helpers/imagePath";
import CustomLink from "./CustomLink";

export default function BookCard({
  publishingURL,
  title,
  authors,
  code,
  pages,
  publishing,
  imageLeft = false,
}) {
  return (
    <div
      className={`flex gap-4 p-4 w-full flex-row-reverse md:${
        imageLeft ? "flex-row-reverse" : "flex-row"
      } overflow-auto`}
    >
      {/* Columna de información */}
      <div className="flex flex-col justify-center flex-1">
        <CustomLink
          to={`/libros/${publishingURL}`}
          className="text-sm text-clip md:text-lg font-bold text-sky-700 mb-2"
        >
          {title}
        </CustomLink>
        <p className="text-xs md:text-md text-gray-600 mb-1">
          <span className="font-semibold">Autor(es):</span> {authors}
        </p>
        <p className="text-xs md:text-md text-gray-600 mb-1">
          <span className="font-semibold">ISBN:</span> {code}
        </p>
        <p className="text-xs md:text-md text-gray-600">
          <span className="font-semibold">Páginas:</span> {pages}
        </p>
      </div>

      {/* Columna de imagen/portada */}
      <div className="flex-shrink-0 lg:overflow-hidden">
        {publishing.cover !== null ? (
          <img
            src={getPublishingImagePath(publishing)}
            alt={`Portada de ${title}`}
            className="w-32 h-48 object-cover rounded-lg shadow-md"
          />
        ) : (
          <div className="w-32 h-48 object-cover bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md flex items-center justify-center mx-auto md:mx-0">
            <svg
              aria-label="defaultImage"
              className="w-20 h-20 text-white opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
