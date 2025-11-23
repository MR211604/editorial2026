import { useInfiniteQuery } from "@tanstack/react-query";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { Chrono } from "react-chrono";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useCallback } from "react";
import { fetchItems } from "../helpers/fetchTimelineItems";

export default function BooksPage() {
  const { ref, inView } = useInView();
  const [allItems, setAllItems] = useState([]);

  const {
    data,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["books"],
    queryFn: ({ pageParam }) => fetchItems(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (data?.pages) {
      const newItems = data.pages.flatMap((page) =>
        page.data.map((item, index) => ({
          ...item,
          id: `${page.currentPage}-${index}`,
        }))
      );
      setAllItems(newItems);
    }
  }, [data]);

  // Controlamos de forma manual cuándo cargar más elementos
  const loadMoreItems = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (inView) {
      loadMoreItems();
    }
  }, [inView, loadMoreItems]);

  return (
    <DefaultLayout>
      <main className="p-4 mt-16">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-sky-700 font-bold mb-8">
            LÍNEA DE TIEMPO "LIBROS"
          </h1>

          {isLoading ? (
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                Cargando la línea de tiempo...
              </p>
            </div>
          ) : status === "error" ? (
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-red-600 text-lg">Error al cargar los datos</p>
            </div>
          ) : allItems.length > 0 ? (
            <>
              <Chrono
                activeItemIndex
                slideShow={false}
                disableToolbar
                items={allItems}
                mode="VERTICAL_ALTERNATING"
              />
              <div ref={ref}></div>
              {isFetchingNextPage && (
                <p className="mt-4 text-gray-600">Cargando más elementos...</p>
              )}
            </>
          ) : (
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                No hay elementos para mostrar
              </p>
            </div>
          )}
        </section>
      </main>
    </DefaultLayout>
  );
}
