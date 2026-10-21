import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBooks } from "../../api/hooks/usePublishings";
import { useFilteredCategories } from "../../components/hooks/useFilteredCategories";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import { getPublishingImagePath } from "../../helpers/imagePath";

const LIMIT = 9;

const flattenCategories = (categories = [], depth = 0) =>
  categories.flatMap((category) => [
    { ...category, depth },
    ...flattenCategories(category.children_recursive, depth + 1),
  ]);

export default function BooksCategoryView() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const { filteredCategories } = useFilteredCategories({
    categoryType: "Libro",
  });
  
  const categoryOptions = useMemo(
    () => flattenCategories(filteredCategories),
    [filteredCategories],
  );

  const { books, isLoading, isError, isPlaceholderData } = useGetBooks({
    page,
    limit: LIMIT,
    search,
    categoryId,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(searchInput.trim());
      setPage(1);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  const pagination = books?.pagination;
  const lastPage = pagination?.last_page ?? 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= lastPage) {
      setPage(newPage);
    }
  };

  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
    setPage(1);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-8xl mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row gap-4 px-4 mb-12">
        <input
          type="search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Buscar por título, autor o ISBN"
          aria-label="Buscar libros"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
        />
        <select
          value={categoryId}
          onChange={handleCategoryChange}
          aria-label="Filtrar por categoría"
          className="md:w-72 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
        >
          <option value="">Todas las categorías</option>
          {categoryOptions.map((category) => (
            <option key={category.idCategory} value={category.idCategory}>
              {"— ".repeat(category.depth)}
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {isError ? (
        <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-red-600 text-lg">Error al cargar los libros</p>
        </div>
      ) : books?.data?.length > 0 ? (
        <>
          {pagination && (
            <p className="text-gray-600 mb-8">
              {pagination.total} libro(s) encontrado(s)
            </p>
          )}

          <div
            className={`grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-14 w-full mb-16 px-4 transition-opacity ${
              isPlaceholderData ? "opacity-60" : "opacity-100"
            }`}
          >
            {books.data.map((book) => (
              <div
                key={book.idPublishing}
                className="flex items-start bg-white rounded-lg shadow-md p-4"
              >
                {book.cover ? (
                  <img
                    src={getPublishingImagePath(book)}
                    alt={book.title}
                    className="w-32 h-48 rounded-md shadow mr-4 flex-shrink-0 object-cover"
                  />
                ) : (
                  <div className="bg-blue-300 w-32 h-48 rounded-md shadow mr-4 flex-shrink-0" />
                )}
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <h2 className="font-bold text-blue-900 mb-2 text-lg line-clamp-2">
                      {book.title}
                    </h2>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      <span className="font-bold">Autor(es): </span>
                      {book.authors?.length
                        ? book.authors
                            .map((author) => `${author.name} ${author.lastname}`)
                            .join(", ")
                        : "Sin autor"}
                    </p>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-1">
                      <span className="font-bold">Año de edición: </span>
                      {book.publish_date?.slice(0, 4) ?? "N/A"}
                    </p>
                    <p className="text-sm text-gray-700 mb-6 line-clamp-1">
                      <span className="font-bold">Número de páginas: </span>
                      {book.pages ?? "N/A"}
                    </p>
                  </div>
                  <Link
                    to={`/libros/${book.URL}`}
                    className="bg-amber-300 hover:bg-amber-400 transition-all text-blue-900 font-semibold py-2 px-5 rounded-full text-sm w-max"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {pagination && (
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
                Página {pagination.current_page} de {pagination.last_page}
              </span>
              <Button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === lastPage}
                className={`px-4 py-2 rounded-md ${
                  page === lastPage ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Siguiente
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">
            No se encontraron libros con los filtros seleccionados
          </p>
        </div>
      )}
    </div>
  );
}
