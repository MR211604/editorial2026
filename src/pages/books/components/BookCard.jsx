import { Link } from "react-router-dom";
import { getPublishingImagePath } from "../../../helpers/imagePath";

export default function BookCard({ book }) {
  return (
    <article className="flex items-start rounded-lg bg-white p-4 shadow-md">
      {book.cover ? (
        <img
          src={getPublishingImagePath(book)}
          alt={book.title}
          className="mr-4 h-48 w-32 flex-shrink-0 rounded-md object-cover shadow"
        />
      ) : (
        <div className="mr-4 h-48 w-32 flex-shrink-0 rounded-md bg-blue-300 shadow" />
      )}
      <div className="flex h-full w-full flex-col justify-between">
        <div>
          <h2 className="mb-2 line-clamp-2 text-lg font-bold text-blue-900">
            {book.title}
          </h2>
          <p className="mb-3 line-clamp-2 text-sm text-gray-700">
            <span className="font-bold">Autor(es): </span>
            {book.authors?.length
              ? book.authors
                  .map((author) => `${author.name} ${author.lastname}`)
                  .join(", ")
              : "Sin autor"}
          </p>
          <p className="mb-3 line-clamp-1 text-sm text-gray-700">
            <span className="font-bold">Año de edición: </span>
            {book.publish_date?.slice(0, 4) ?? "N/A"}
          </p>
          <p className="mb-6 line-clamp-1 text-sm text-gray-700">
            <span className="font-bold">Número de páginas: </span>
            {book.pages ?? "N/A"}
          </p>
        </div>
        <Link
          to={`/libros/${book.URL}`}
          className="w-max rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-blue-900 transition-all hover:bg-amber-400"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
