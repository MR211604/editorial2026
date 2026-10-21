import { useEffect, useId, useMemo, useRef, useState } from "react";

const flattenCategories = (categories = [], depth = 0) =>
  categories.flatMap((category) => {
    const isVisible = category.state === 1;
    const children = flattenCategories(
      category.children_recursive,
      isVisible ? depth + 1 : depth,
    );

    if (!isVisible) return children;

    return [
      { ...category, depth, hasChildren: children.length > 0 },
      ...children,
    ];
  });

export default function CategoryDropdown({ categories, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const toggleRef = useRef(null);
  const optionsId = useId();

  const categoryOptions = useMemo(
    () => flattenCategories(categories),
    [categories],
  );
  const selectedCategory = categoryOptions.find(
    (category) => String(category.idCategory) === value,
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (categoryId) => {
    onChange(categoryId);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full md:w-72">
      <button
        ref={toggleRef}
        type="button"
        aria-label="Filtrar por categoría"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={optionsId}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2 text-left text-gray-700 transition focus:outline-none focus:ring-2 focus:ring-sky-600/25 ${
          isOpen
            ? "border-sky-600 ring-2 ring-sky-600/25"
            : "border-gray-300 focus:border-sky-600"
        }`}
      >
        <span>{selectedCategory?.title ?? "Todas las categorías"}</span>
        <svg
          aria-hidden="true"
          className={`ml-3 h-4 w-4 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id={optionsId}
          role="listbox"
          aria-label="Filtrar por categoría"
          className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg"
        >
          <button
            type="button"
            role="option"
            aria-selected={!value}
            onClick={() => handleSelect("")}
            className={`block w-full px-3 py-2 text-left transition focus-visible:outline-none ${
              !value
                ? "bg-sky-600 text-white hover:bg-sky-600 hover:text-white focus-visible:bg-sky-600"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-800 focus-visible:bg-gray-100"
            }`}
          >
            Todas las categorías
          </button>
          {categoryOptions.map((category) => {
            const categoryId = String(category.idCategory);
            const isSelected = categoryId === value;

            return (
              <button
                key={category.idCategory}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(categoryId)}
                style={{
                  paddingLeft: `${0.75 + (category.depth ?? 0) * 1.25}rem`,
                }}
                className={`block w-full py-2 pr-3 text-left transition focus-visible:outline-none ${
                  category.hasChildren ? "font-bold" : ""
                } ${
                  isSelected
                    ? "bg-sky-600 text-white hover:bg-sky-600 hover:text-white focus-visible:bg-sky-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-800 focus-visible:bg-gray-100"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
