import { useState } from "react";
import { useCategory } from "../../../api/hooks/useCategories";
import { useGetPublishings } from "../../../api/hooks/usePublishings";
import Loader from "../../../components/ui/Loader";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { getPublishingImagePath } from "../../../helpers/imagePath";

export default function DiaLogosIndex() {
  const [page, setPage] = useState(1);
  const { category, isLoading } = useCategory("dia-logos");
  const { publishings, isLoading: isPublishingsLoading } = useGetPublishings(
    category?.data?.id,
    "Revista",
    page,
    9,
  );

  if (isLoading || isPublishingsLoading) {
    return <Loader />;
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= publishings?.pagination?.last_page) {
      setPage(newPage);
    }
  };

  return (
    <div className="max-w-8xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Archivo
      </h1>

      <div className="w-full flex items-center justify-between gap-4 px-4 mb-16">
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 text-blue-900 hover:bg-blue-50 transition-all flex-shrink-0 ${
            page === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Página anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-14 w-full mb-16 px-4">
          {publishings?.data?.map((publishing) => (
            <div
              key={publishing.id}
              className="flex items-start bg-white rounded-lg shadow-md p-4"
            >
              {publishing.cover ? (
                <img
                  src={getPublishingImagePath(publishing)}
                  alt={publishing.title}
                  className="w-32 h-48 rounded-md shadow mr-4 flex-shrink-0 object-cover"
                />
              ) : (
                <div className="bg-blue-300 w-32 h-48 rounded-md shadow mr-4 flex-shrink-0" />
              )}
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <h2 className="font-bold text-blue-900 mb-2 text-lg line-clamp-2">
                    {publishing.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-6 line-clamp-3">
                    <span className="font-bold">Autor(es): </span>
                    {publishing.authors.map((author) => author.name).join(", ")}
                  </p>
                  <p className="text-sm text-gray-700 mb-6 line-clamp-3">
                    <span className="font-bold">Año de edición: </span>
                    {new Date(publishing.publish_date).getFullYear()}
                  </p>
                  <p className="text-sm text-gray-700 mb-6 line-clamp-3">
                    <span className="font-bold">Número de páginas: </span>
                    {publishing.pages}
                  </p>
                </div>
                <Button className="text-blue-900 font-semibold py-2 px-5 rounded-full text-sm w-max">
                  <Link to={`/revistas/${publishing.URL}`}>Ver detalle</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === publishings?.pagination?.last_page}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 text-blue-900 hover:bg-blue-50 transition-all flex-shrink-0 ${
            page === publishings?.pagination?.last_page
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
          aria-label="Página siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>

      {/* Pagination */}
      {publishings?.pagination && (
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 rounded-md ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Anterior
          </Button>
          <span className="text-gray-700 font-medium">
            Página {publishings.pagination.current_page} de{" "}
            {publishings.pagination.last_page}
          </span>
          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === publishings.pagination.last_page}
            className={`px-4 py-2 rounded-md ${
              page === publishings.pagination.last_page
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  );
}
