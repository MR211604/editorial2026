import BookCard from "./BookCard";

export default function BooksGrid({ books, isPlaceholderData }) {
  return (
    <div
      className={`mb-16 grid w-full grid-cols-1 gap-14 px-4 transition-opacity xs:grid-cols-2 xl:grid-cols-3 ${
        isPlaceholderData ? "opacity-60" : "opacity-100"
      }`}
    >
      {books.map((book) => (
        <BookCard key={book.idPublishing} book={book} />
      ))}
    </div>
  );
}
