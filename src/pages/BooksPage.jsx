import { useState } from "react";
import BooksCategoryView from "./books/BooksCategoryView";
import BooksTimelineView from "./books/BooksTimelineView";

const VIEWS = {
  TIMELINE: "timeline",
  CATEGORY: "category",
};

const VIEW_OPTIONS = [
  { value: VIEWS.TIMELINE, label: "Línea de tiempo" },
  { value: VIEWS.CATEGORY, label: "Por categoría" },
];

export default function BooksPage() {
  const [view, setView] = useState(VIEWS.TIMELINE);

  const isTimeline = view === VIEWS.TIMELINE;

  return (
    <main className="p-4 mt-16">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-sky-700 font-bold mb-8 text-center">
          {isTimeline ? 'LÍNEA DE TIEMPO "LIBROS"' : "LIBROS POR CATEGORÍA"}
        </h1>

        <div className="flex gap-3 mb-10">
          {VIEW_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={view === option.value}
              onClick={() => setView(option.value)}
              className={`px-5 py-2 rounded-full font-semibold text-sm border transition-all cursor-pointer ${
                view === option.value
                  ? "bg-sky-700 text-white border-sky-700"
                  : "bg-white text-sky-700 border-sky-700 hover:bg-sky-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {isTimeline ? <BooksTimelineView /> : <BooksCategoryView />}
      </section>
    </main>
  );
}
