import Button from "../../../components/ui/Button";

export default function BooksPagination({
  pagination,
  page,
  lastPage,
  onPageChange,
}) {
  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`rounded-md px-4 py-2 ${
          page === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Anterior
      </Button>
      <span className="font-medium text-gray-700">
        Página {pagination.current_page} de {pagination.last_page}
      </span>
      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={page === lastPage}
        className={`rounded-md px-4 py-2 ${
          page === lastPage ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Siguiente
      </Button>
    </div>
  );
}
