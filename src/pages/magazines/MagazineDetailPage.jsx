import { useParams, Link } from "react-router-dom";
import { useGetPublishingByURL } from "../../api/hooks/usePublishings";
import Loader from "../../components/ui/Loader";
import { getPublishingImagePath } from "../../helpers/imagePath";

export default function MagazineDetailPage() {
  const { magazineURL } = useParams();
  const { publishing, isLoading } = useGetPublishingByURL(magazineURL);
  const magazine = publishing?.data;
  if (isLoading) {
    return <Loader />;
  }

  if (!publishing?.ok || !publishing?.data) {
    return (
      <div className="max-w-screen-7xl mx-auto p-6 mt-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <svg
            className="mx-auto h-12 w-12 text-red-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-red-700 mb-2">
            Revista no encontrada
          </h2>
          <p className="text-red-600 mb-4">
            No se pudo encontrar la revista solicitada.
          </p>
          <Link
            to="/revistas"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a revistas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto p-6 mt-8">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cover Image - Left Side */}
          <div className="flex-shrink-0">
            {magazine.cover ? (
              <img
                src={getPublishingImagePath(publishing?.data)}
                alt={magazine.title}
                className="w-64 h-auto rounded-lg shadow-md object-cover mx-auto md:mx-0"
              />
            ) : (
              <div className="w-64 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md flex items-center justify-center mx-auto md:mx-0">
                <svg
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

          {/* Details - Right Side */}
          <div className="flex-grow">
            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              {magazine.title}
            </h1>

            {/* Magazine Info */}
            <div className="space-y-3 mb-6">
              {/* {magazine.publisher && (
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                      Editorial:
                    </span>
                    <span className="text-gray-600">{magazine.publisher}</span>
                  </div>
                )} */}
              {magazine.type?.name && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Tipo:
                  </span>
                  <span className="text-gray-600">{magazine.type.name}</span>
                </div>
              )}

              {magazine.volume && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Volumen:
                  </span>
                  <span className="text-gray-600">{magazine.volume}</span>
                </div>
              )}

              {magazine.volume_date && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Fecha volumen:
                  </span>
                  <span className="text-gray-600">{magazine.volume_date}</span>
                </div>
              )}

              {magazine.publish_date && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Año edición:
                  </span>
                  <span className="text-gray-600">
                    {new Date(magazine.publish_date).toLocaleDateString(
                      "es-ES",
                      {
                        year: "numeric",
                        // month: "long",
                        // day: "numeric",
                      },
                    )}
                  </span>
                </div>
              )}

              {magazine.pages && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Páginas:
                  </span>
                  <span className="text-gray-600">{magazine.pages}</span>
                </div>
              )}

              {magazine.publish_code && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Código:
                  </span>
                  <span className="text-gray-600">{magazine.publish_code}</span>
                </div>
              )}
            </div>

            {/* Authors */}
            {magazine.authors && magazine.authors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Autores:</h3>
                <div className="flex flex-wrap gap-2">
                  {magazine.authors.map((author) => (
                    <span
                      key={author.idAuthor}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {author.name} {author.lastname}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Resource URL */}
            {/* {magazine.resource_URL && ( */}
            <a
              // href={magazine.resource_URL}
              href={
                "https://www.udb.edu.sv/editorial_files/revistas/es/teoria_y_praxis/creditos.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 mr-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Consejo editorial
            </a>

            <a
              href={
                "https://www.udb.edu.sv/editorial_files/revistas/es/teoria_y_praxis/normas-para-presentacion-de-articulos.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Normas de publicación
            </a>
            {/* )} */}
          </div>
        </div>

        {/* Articles/Details Section */}
        {magazine.details && magazine.details.length > 0 && (
          <div className="mt-10 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Artículos ({magazine.details.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {magazine.details.map((detail) => (
                <div
                  key={detail.idPublishingDetail}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {detail.title || "Sin título"}
                  </h3>
                  {(detail.URL || detail.repository_URL) && (
                    <a
                      href={detail.URL || detail.repository_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ver artículo
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
