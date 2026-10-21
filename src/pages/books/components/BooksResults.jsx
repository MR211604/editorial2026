import BooksGrid from "./BooksGrid";
import BooksPagination from "./BooksPagination";

function ResultsMessage({ children, isError = false }) {
  return (
    <div className="w-full max-w-4xl rounded-lg bg-gray-100 p-8 text-center">
      <p className={`text-lg ${isError ? "text-red-600" : "text-gray-600"}`}>
        {children}
      </p>
    </div>
  );
}

export default function BooksResults({
  books,
  isError,
  isPlaceholderData,
  page,
  lastPage,
  onPageChange,
}) {
  if (isError) {
    return <ResultsMessage isError>Error al cargar los libros</ResultsMessage>;
  }

  if (!books?.data?.length) {
    return (
      <ResultsMessage>
        No se encontraron libros con los filtros seleccionados
      </ResultsMessage>
    );
  }

  const { pagination } = books;

  return (
    <>
      {pagination && (
        <p className="mb-8 text-gray-600">
          {pagination.total} libro(s) encontrado(s)
        </p>
      )}
      <BooksGrid books={books.data} isPlaceholderData={isPlaceholderData} />
      {pagination && (
        <BooksPagination
          pagination={pagination}
          page={page}
          lastPage={lastPage}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
