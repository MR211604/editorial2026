export default function BookCard({
  title,
  authors,
  code,
  pages,
  imageUrl,
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
        <h3 className="text-sm text-clip md:text-lg font-bold text-sky-700 mb-2">
          {title}
        </h3>
        <p className="text-xs md:text-md text-gray-600 mb-1">
          <span className="font-semibold">Autor(es):</span> {authors}
        </p>
        <p className="text-xs md:text-md text-gray-600 mb-1">
          <span className="font-semibold">Código:</span> {code}
        </p>
        <p className="text-xs md:text-md text-gray-600">
          <span className="font-semibold">Páginas:</span> {pages}
        </p>
      </div>

      {/* Columna de imagen/portada */}
      <div className="flex-shrink-0 lg:overflow-hidden">
        <img
          src={imageUrl}
          alt={`Portada de ${title}`}
          className="w-32 h-48 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
