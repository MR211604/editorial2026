import { useParams } from "react-router-dom";
import { useGetPublishingByURL } from "../../api/hooks/usePublishings";
import Loader from "../../components/ui/Loader";
import { getPublishingImagePath } from "../../helpers/imagePath";

export default function BookDetailPage() {
  const { bookURL } = useParams();
  const { publishing, isLoading } = useGetPublishingByURL(bookURL);
  const book = publishing?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="max-w-screen-xl mx-auto p-6 mt-8">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cover Image - Left Side */}
          <div className="flex-shrink-0">
            {book.cover ? (
              <img
                src={getPublishingImagePath(book)}
                alt={book.title}
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
              {book.title}
            </h1>

            {/* Magazine Info */}
            <div className="space-y-3 mb-6">
              {book.volume && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Volumen:
                  </span>
                  <span className="text-gray-600">{book.volume}</span>
                </div>
              )}

              {book.volume_date && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Fecha volumen:
                  </span>
                  <span className="text-gray-600">{book.volume_date}</span>
                </div>
              )}

              {book.publish_date && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Año edición:
                  </span>
                  <span className="text-gray-600">
                    {new Date(book.publish_date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      // month: "long",
                      // day: "numeric",
                    })}
                  </span>
                </div>
              )}

              {book.pages && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    Páginas:
                  </span>
                  <span className="text-gray-600">{book.pages}</span>
                </div>
              )}

              {book.publish_code && (
                <div className="flex items-start">
                  <span className="font-semibold text-gray-700 w-32 flex-shrink-0">
                    ISBN:
                  </span>
                  <span className="text-gray-600">{book.publish_code}</span>
                </div>
              )}
            </div>

            {/* Authors */}
            {book.authors && book.authors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Autores:</h3>
                <div className="flex flex-wrap gap-2">
                  {book.authors.map((author) => (
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

            <a
              // href={magazine.resource_URL}
              href={book.resource_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-6 mr-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
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
              Ver libro
            </a>
            
          </div>
        </div>
      </div>
    </main>
  );
}
