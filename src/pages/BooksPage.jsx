import { useCallback, useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { useInView } from "react-intersection-observer";
import { useGetInfinitePublishings } from "../api/hooks/usePublishings";
import BookCard from "../components/ui/BookCard";

export default function BooksPage() {
  const { ref, inView } = useInView();
  const [allItems, setAllItems] = useState([]);
  const [customCards, setCustomCards] = useState([]);

  const {
    data,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useGetInfinitePublishings("", "Libro", 10, 0);

  useEffect(() => {
    if (data?.pages) {
      const publishings = data?.pages.flatMap((page) => page.data);

      const timelineItems = publishings.map((publishing) => ({
        title: publishing.publish_date
          ? publishing.publish_date
          : publishing.volume,
      }));

      console.log(publishings);

      const cards = publishings.map((publishing, index) => (
        <BookCard
          key={publishing.idPublishing || index}
          publishingURL={publishing.URL}
          title={publishing.title}
          authors={
            publishing.authors
              ?.map((author) => `${author.name} ${author.lastname}`)
              .join(", ") || "Sin autor"
          }
          code={publishing.publish_code || "N/A"}
          pages={publishing.pages || "N/A"}
          publishing={publishing}
          imageLeft={(index + 1) % 2 === 0}
        />
      ));

      setAllItems(timelineItems);
      setCustomCards(cards);
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
              disableToolbar
              items={allItems}
              cardHeight={300}
              mode="VERTICAL_ALTERNATING"
            >
              {customCards}
            </Chrono>
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
  );
}
