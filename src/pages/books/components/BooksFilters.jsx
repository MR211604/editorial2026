import CategoryDropdown from "./CategoryDropdown";

export default function BooksFilters({
  categories,
  categoryId,
  onCategoryChange,
  searchInput,
  onSearchChange,
}) {
  return (
    <div className="mb-12 flex w-full flex-col gap-4 px-4 md:flex-row">
      <input
        type="search"
        value={searchInput}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Buscar por título, autor o ISBN"
        aria-label="Buscar libros"
        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
      />
      <CategoryDropdown
        categories={categories}
        value={categoryId}
        onChange={onCategoryChange}
      />
    </div>
  );
}
