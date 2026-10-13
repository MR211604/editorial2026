import { Link, useSearchParams } from "react-router-dom";
import { useSearchPublishings } from "../api/hooks/usePublishings";
import { env } from "../config/env";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const { publishings, isLoading } = useSearchPublishings(searchQuery);

  const results = {
    libros: publishings?.data?.libros || [],
    revistas: publishings?.data?.revistas || [],
    articulos: publishings?.data?.articulos || [],
  };

  const error =
    publishings && !publishings.ok ? "Error al realizar la búsqueda" : null;

  const totalResults =
    results.libros.length + results.revistas.length + results.articulos.length;

  return (
    <main className="max-w-screen-xl mx-auto p-6 mt-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Resultados de búsqueda
        </h1>
        {searchQuery && (
          <p className="text-gray-600">
            Mostrando resultados para:{" "}
            <span className="font-semibold text-blue-600">"{searchQuery}"</span>
          </p>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* No Search Query */}
      {!isLoading && !searchQuery && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-gray-600 text-lg">
            Por favor, ingrese un término de búsqueda
          </p>
        </div>
      )}

      {/* Results */}
      {!isLoading && searchQuery && !error && (
        <>
          {/* Results Summary */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <p className="text-gray-700">
              Se encontraron{" "}
              <span className="font-bold text-blue-600">{totalResults}</span>{" "}
              resultado{totalResults !== 1 ? "s" : ""}
            </p>
          </div>

          {totalResults === 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                No se encontraron resultados para tu búsqueda
              </p>
            </div>
          )}

          {/* Libros Section */}
          {results.libros.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-sky-700 mb-4 flex items-center">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Libros ({results.libros.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.libros.map((libro) => (
                  <div
                    key={libro.idPublishing}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {libro.title}
                    </h3>
                    {libro.URL && (
                      <a
                        href={`${env.BASE_URL}/libros/${libro.URL}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Ver recurso
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
            </section>
          )}

          {/* Revistas Section */}
          {results.revistas.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-sky-700 mb-4 flex items-center">
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                Revistas ({results.revistas.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.revistas.map((revista) => (
                  <div
                    key={revista.idPublishing}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {revista.title}
                    </h3>
                    {revista.URL && (
                      <Link
                        to={`${env.BASE_URL}/revistas/${revista.URL}`}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Ver revista
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Artículos Section */}
          {results.articulos.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-sky-700 mb-4 flex items-center">
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
                Artículos ({results.articulos.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.articulos.map((articulo) => (
                  <div
                    key={articulo.idPublishingDetail}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {articulo.title}
                    </h3>
                    {articulo.URL && (
                      <a
                        href={articulo.URL}
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
            </section>
          )}
        </>
      )}
    </main>
  );
}
