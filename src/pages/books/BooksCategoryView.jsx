import { useEffect, useState } from "react";
import { useGetBooks } from "../../api/hooks/usePublishings";
import { useFilteredCategories } from "../../components/hooks/useFilteredCategories";
import Loader from "../../components/ui/Loader";
import BooksFilters from "./components/BooksFilters";
import BooksResults from "./components/BooksResults";

const LIMIT = 9;

export default function BooksCategoryView() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const { filteredCategories } = useFilteredCategories({
    categoryType: "Libro",
  });
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

  const handleCategoryChange = (newCategoryId) => {
    setCategoryId(newCategoryId);
    setPage(1);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto flex w-full max-w-8xl flex-col items-center">
      <BooksFilters
        categories={filteredCategories}
        categoryId={categoryId}
        onCategoryChange={handleCategoryChange}
        searchInput={searchInput}
        onSearchChange={setSearchInput}
      />
      <BooksResults
        books={books}
        isError={isError}
        isPlaceholderData={isPlaceholderData}
        page={page}
        lastPage={lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
